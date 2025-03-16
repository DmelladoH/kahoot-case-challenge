import { useEffect, useState } from "react";
import { BookSummary, OrderByOptions } from "../types";
import { getBooks } from "../services/bookServices";
import { PageLimit } from "../constants";
import { useLocation } from "wouter";

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
  const [books, setBooks] = useState<BookSummary[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const foo = async () => {
      setIsLoading(true);
      const books = await getBooks(page);
      setBooks(books);
      setIsLoading(false);
    };
    foo();
  }, [page]);

  const filteredBooks = [...books]
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
    .slice(offset, offset + limit);

  const next = () => {
    let newPage = page;
    let newOffset = offset;
    if (offset + limit >= 30) {
      newPage = page + 1;
      newOffset = 0;
    } else {
      newOffset = offset + limit;
    }
    setLocation(`/page/${newPage}/offset/${newOffset}`);
  };

  return { books: filteredBooks, next, isLoading };
}
