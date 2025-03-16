import useBookDetails from "../hooks/useBookDetails";
import { Person } from "../types";
import styles from "./bookDetails.module.css";

export default function BookDetails({ id }: { id: string }) {
  const { book } = useBookDetails({ id });

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={book?.image} alt={book?.title} width="200px" height="300px" />
      </div>
      <div className={styles.infoContainer}>
        <h1>{book?.title}</h1>
        <section>
          <ul className={styles.authorList}>
            {book?.authors?.map((author) => (
              <li key={author.name}>
                <AuthorInfo author={author} />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Summary</h3>
          <ul>
            {book?.summaries?.map((summary) => (
              <li key={summary} className={styles.summary}>
                <p>{summary}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function AuthorInfo({ author }: { author: Person }) {
  return (
    <div>
      <h4>{author.name}</h4>
      <p>
        {author.birthYear || "unknown"} - {author.deathYear}
      </p>
    </div>
  );
}
