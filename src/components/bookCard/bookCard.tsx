import ArrowTopRightOnSquare from "../../assets/svgs/arrow-top-right-on-square";
import { BookSummary } from "../../types";
import { Button } from "../ui/button";
import styles from "./bookCard.module.css";

export default function BookCard({ book }: { book: BookSummary }) {
  return (
    <article className={styles.container}>
      <img src={book.image} alt={book.title} width="94px" height="auto" />
      <div className={styles.infoContainer}>
        <span>{book.title}</span>
        <span>{book.firstAuthor}</span>
        <span>{book.subjects[0]}</span>
        <Button asChild variant="primary">
          <a href={`/${book.id}`}>
            See details <ArrowTopRightOnSquare width="16px" height="16px" />
          </a>
        </Button>
      </div>
    </article>
  );
}
