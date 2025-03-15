import { useEffect, useState } from "react";
import "./App.css";
import { getBooks } from "./services/bookServices";
import { BookSummary } from "./types";
import BookCard from "./components/bookCard";

function App() {
  const [books, setBooks] = useState<BookSummary[]>([]);

  useEffect(() => {
    const foo = async () => {
      const books = await getBooks();
      console.log({ books });
      setBooks(books);
    };
    foo();
  }, []);

  return (
    <main>
      <ul className="bookList">
        {books?.map((book) => (
          <li key={book.id}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
