import { getBookById } from "../services/bookServices";
import { useQuery } from "@tanstack/react-query";

export default function useBookDetails({ id }: { id: string }) {
  const {
    data: book,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["book", { id }],
    queryFn: () => getBookById(id),
    staleTime: 1000 * 60 * 5,
  });

  return { book, isError, isPending };
}
