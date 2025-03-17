import { BookSummary } from "../../../../types";
import BookCard from "../bookCard/bookCard";

interface Props {
  books: BookSummary[];
}

export function BookGrid({ books }: Props) {
  return (
    <ul className="bookList gallery">
      {books?.map((book) => (
        <li key={book.id} className="card">
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}
