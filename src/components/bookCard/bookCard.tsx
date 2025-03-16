import { BookSummary } from "../../types";
import styles from "./bookCard.module.css";

export default function BookCard({ book }: { book: BookSummary }) {
  return (
    <article>
      <a href={`/${book.id}`}>
        <div className={styles.container}>
          <img src={book.image} alt={book.title} width="94px" height="140px" />
          <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{book.title}</h2>
              <span className={styles.author}>{book.firstAuthor}</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

{
  /* <div>
<Button asChild variant="primary">
  See details <ArrowTopRightOnSquare width="16px" height="16px" />
  </Button>
  </div> */
}
