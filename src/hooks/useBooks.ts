import { OrderByOptions } from "../types";
import { getBooks } from "../services/bookServices";
import { PageLimit } from "../constants";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface UseBooksProps {
  offset?: number;
  limit?: number;
  page?: number;
  orderBy: OrderByOptions;
}

export function useBooks({
  offset = 0,
  limit = PageLimit,
  page = 1,
  orderBy,
}: UseBooksProps) {
  const [, setLocation] = useLocation();

  const {
    data: books,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["books", { page }],
    queryFn: () => getBooks(page),
    staleTime: 1000 * 60 * 5,
  });

  const filteredBooks = books
    ? [...books]
        .sort((a, b) => {
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
        .slice(offset, offset + limit)
    : [];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const goNext = () => {
    let newPage = page;
    let newOffset = offset;
    if (offset + limit >= 30) {
      newPage = page + 1;
      newOffset = 0;
    } else {
      newOffset = offset + limit;
    }
    scrollToTop();
    setLocation(`/page/${newPage}/offset/${newOffset}`);
  };

  const goPrev = () => {
    let newPage = page;
    let newOffset = offset;
    if (offset - limit < 0) {
      newPage = page - 1;
      newOffset = 30 - limit;
    } else {
      newOffset = offset - limit;
    }
    scrollToTop();
    setLocation(`/page/${newPage}/offset/${newOffset}`);
  };

  return { books: filteredBooks, isError, goNext, goPrev, isPending };
}
