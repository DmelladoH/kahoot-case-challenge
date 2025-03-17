import { useState } from "react";
import { useBooks } from "../../hooks/useBooks";
import { BookListAttributes, OrderBy } from "../../types";
import ListFooter from "./components/listFooter/listFooter";
import styles from "./home.module.css";
import { LoadingErrorWrapper } from "../../components/loadingErrorWrapper";
import ErrorState from "../../components/errorState/errorState";
import ListOrderBy from "./components/listOrderBy/listOrderBy";
import { LoadingGrid } from "./components/bookGrid/loadingGrid";
import { BookGrid } from "./components/bookGrid/bookGrid";

interface Props {
  page?: string;
}

export default function Home({ page }: Props) {
  const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.TitleAsc);

  const { books, isPending, isError } = useBooks({
    page: Number(page) || 1,
    orderBy: orderBy,
  });

  const toggleOrder = (
    type: BookListAttributes.Title | BookListAttributes.Author
  ) => {
    if (type === BookListAttributes.Title) {
      setOrderBy((prev) =>
        prev === OrderBy.TitleAsc ? OrderBy.TitleDesc : OrderBy.TitleAsc
      );
      return;
    }

    if (type === BookListAttributes.Author) {
      setOrderBy((prev) =>
        prev === OrderBy.AuthorAsc ? OrderBy.AuthorDesc : OrderBy.AuthorAsc
      );
      return;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Books: </h1>
      <div>
        <ListOrderBy orderBy={orderBy} toggleOrder={toggleOrder} />
        <LoadingErrorWrapper
          loading={isPending}
          error={isError}
          errorFallback={<ErrorState />}
          loadingFallback={<LoadingGrid />}
        >
          <BookGrid books={books} />
        </LoadingErrorWrapper>
        <ListFooter page={Number(page) || 1} />
      </div>
    </div>
  );
}
