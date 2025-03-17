import { getBooks } from "../services/bookServices";
import { PageLimit } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { OrderBy } from "../types";
import { sortBooks } from "../helpers/utils";

interface UseBooksProps {
  limit?: number;
  page?: number;
  orderBy: OrderBy;
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

  const processedBooks = books ? sortBooks(books, orderBy).slice(0, limit) : [];

  return { books: processedBooks, isError, error, isPending };
}
