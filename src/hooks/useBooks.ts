import { OrderByOptions } from "../types";
import { getBooks } from "../services/bookServices";
import { PageLimit } from "../constants";
import { useQuery } from "@tanstack/react-query";

interface UseBooksProps {
  limit?: number;
  page?: number;
  orderBy: OrderByOptions;
}

export function useBooks({
  limit = PageLimit,
  page = 1,
  orderBy,
}: UseBooksProps) {
  const {
    data: books,
    isError,
    error,
    isPending,
  } = useQuery({
    queryKey: ["books", { page }],
    queryFn: () => getBooks(page),
    staleTime: 1000 * 60 * 5,
  });

  const filteredBooks = books
    ? [...books].slice(0, limit).sort((a, b) => {
        if (orderBy === "titleAsc") {
          return a.title.localeCompare(b.title);
        }
        if (orderBy === "titleDesc") {
          return b.title.localeCompare(a.title);
        }
        if (orderBy === "authorAsc") {
          return a.firstAuthor.localeCompare(b.firstAuthor);
        }
        if (orderBy === "authorDesc") {
          return b.firstAuthor.localeCompare(a.firstAuthor);
        }
        return 0;
      })
    : [];

  return { books: filteredBooks, isError, error, isPending };
}
