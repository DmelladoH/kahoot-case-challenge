import { Link } from "wouter";
import { Button } from "../../../../components/ui/button";
import styles from "./listFooter.module.css";

interface Props {
  page: number;
}

export default function ListFooter({ page }: Props) {
  const prevPage = page - 1;
  const nextPage = page + 1;

  return (
    <div className={styles.container}>
      {prevPage > 0 ? (
        <Button asChild variant="secondary">
          <Link to={`/page/${prevPage}`}>Prev</Link>
        </Button>
      ) : (
        <div className={styles.emptyDiv} />
      )}
      <div>{page}</div>
      <Button asChild variant="secondary">
        <Link to={`/page/${nextPage}`}>Next</Link>
      </Button>
    </div>
  );
}
