import { useEffect, useState } from "react";
import { getBookById } from "../services/bookServices";
import { BookDetail } from "../types";

export default function useBookDetails({ id }: { id: string }) {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const foo = async () => {
      setIsLoading(true);
      const book = await getBookById(id);
      setBook(book);
      setIsLoading(false);
    };
    foo();
  }, [id]);

  return { book, isLoading };
}
