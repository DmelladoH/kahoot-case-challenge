import { useState } from "react";
import BookCard from "../components/bookCard";
import { useBooks } from "../hooks/useBooks";
import { OrderByOptions } from "../types";

interface Props {
  offset?: string;
  page?: string;
}

export default function Home({ offset, page }: Props) {
  const [orderBy, setOrderBy] = useState<OrderByOptions>("titleAsc");

  const { books, isLoading, next } = useBooks({
    offset: Number.parseInt(offset || "0"),
    page: Number.parseInt(page || "1"),
    orderBy: orderBy,
  });

  const toggleOrder = (type: "title" | "author") => {
    if (type === "title") {
      setOrderBy((prev) => (prev === "titleAsc" ? "titleDesc" : "titleAsc"));
      return;
    }

    if (type === "author") {
      setOrderBy((prev) => (prev === "authorAsc" ? "authorDesc" : "authorAsc"));
      return;
    }
  };

  const getOrderIcon = () => {
    if (orderBy === "titleAsc") return "⬆️";
    if (orderBy === "titleDesc") return "⬇️";
    return "";
  };

  const getOrderIconTitle = () => {
    if (orderBy === "authorAsc") return "⬆️";
    if (orderBy === "authorDesc") return "⬇️";
    return "";
  };

  return (
    <main>
      {offset}
      {page}
      <div>
        <span>short alphabetical By</span>
        <button onClick={() => toggleOrder("title")}>
          Title {getOrderIcon()}
        </button>
        <button onClick={() => toggleOrder("author")}>
          Author {getOrderIconTitle()}
        </button>
      </div>
      {isLoading && <div>Loading...</div>}
      <ul className="bookList">
        {books?.map((book) => (
          <li key={book.id}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
      <div>
        <button>prev</button>
        <div>{page}</div>
        <a onClick={next}>Next</a>
      </div>
    </main>
  );
}
