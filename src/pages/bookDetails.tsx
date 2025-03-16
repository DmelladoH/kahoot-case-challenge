import useBookDetails from "../hooks/useBookDetails";

export default function BookDetails({ id }: { id: string }) {
  const { book, isLoading } = useBookDetails({ id });

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {book && <p>{book.title}</p>}
    </main>
  );
}
