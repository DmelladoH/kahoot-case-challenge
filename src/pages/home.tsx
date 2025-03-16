import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { OrderBy } from "../types";
import BookCard from "../components/bookCard/bookCard";
import ListFooter from "../components/listFooter/listFooter";
import ListOrderBy from "../components/listOrderBy/listOrderBy";
import styles from "./home.module.css";
interface Props {
  offset?: string;
  page?: string;
}

export default function Home({ offset, page }: Props) {
  const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.TitleAsc);

  const { books, isPending, goNext, goPrev } = useBooks({
    offset: Number.parseInt(offset || "0"),
    page: Number.parseInt(page || "1"),
    orderBy: orderBy,
  });

  const toggleOrder = (type: "title" | "author") => {
    if (type === "title") {
      setOrderBy((prev) =>
        prev === OrderBy.TitleAsc ? OrderBy.TitleDesc : OrderBy.TitleAsc
      );
      return;
    }

    if (type === "author") {
      setOrderBy((prev) =>
        prev === OrderBy.AuthorAsc ? OrderBy.AuthorDesc : OrderBy.AuthorAsc
      );
      return;
    }
  };

  return (
    <div className={styles.container}>
      <ListOrderBy orderBy={orderBy} toggleOrder={toggleOrder} />
      {isPending && <div>Loading...</div>}
      <ul className="bookList gallery">
        {books?.map((book) => (
          <li key={book.id} className="card">
            <BookCard book={book} />
          </li>
        ))}
      </ul>
      <ListFooter
        page={Number.parseInt(page || "1")}
        prev={goPrev}
        next={goNext}
      />
    </div>
  );
}
