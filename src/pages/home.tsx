import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { BookSummary, OrderBy } from "../types";
import BookCard from "../components/bookCard/bookCard";
import ListFooter from "../components/listFooter/listFooter";
import ListOrderBy from "../components/listOrderBy/listOrderBy";
import styles from "./home.module.css";
import SkeletonCard from "../components/bookCard/skeletonCard";
import { LoadingErrorWrapper } from "../components/loadingErrorWrapper";
interface Props {
  page?: string;
}

export default function Home({ page }: Props) {
  const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.TitleAsc);

  const { books, isPending, isError } = useBooks({
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
      <h1 className={styles.title}>Books: </h1>
      <ListOrderBy orderBy={orderBy} toggleOrder={toggleOrder} />
      <LoadingErrorWrapper
        loading={isPending}
        error={isError}
        errorFallback={<ErrorState />}
        loadingFallback={<LoadingGrid />}
      >
        <BookGrid books={books} />
      </LoadingErrorWrapper>
      <ListFooter page={Number.parseInt(page || "1")} />
    </div>
  );
}

function BookGrid({ books }: { books: BookSummary[] }) {
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

function ErrorState() {
  return <div>Error</div>;
}

export function LoadingGrid() {
  return (
    <div className={styles.container}>
      <ul className="bookList gallery">
        {[...Array(10)].map((_, i) => (
          <li key={i} className="card">
            <SkeletonCard />
          </li>
        ))}
      </ul>
    </div>
  );
}
