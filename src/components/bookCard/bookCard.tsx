import { BookSummary } from "../../types";
import styles from "./bookCard.module.css";

export default function BookCard({ book }: { book: BookSummary }) {
  return (
    <article className={styles.container}>
      <img src={book.image} alt={book.title} width="94px" height="auto" />
      <div className={styles.infoContainer}>
        <span>{book.title}</span>
        <span>{book.firstAuthor}</span>
        <span>{book.subjects[0]}</span>
        <a href={`/${book.id}`}>See details</a>
      </div>
    </article>
  );
}
