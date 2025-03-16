import useBookDetails from "../hooks/useBookDetails";

export default function BookDetails({ id }: { id: string }) {
  const { book, isPending } = useBookDetails({ id });

  return (
    <main>
      {isPending && <p>Loading...</p>}
      {book && <p>{book.title}</p>}
    </main>
  );
}
