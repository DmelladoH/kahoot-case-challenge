import ArrowLeft from "../assets/svgs/arrowLeft";
import useBookDetails from "../hooks/useBookDetails";
import { Person } from "../types";
import styles from "./bookDetails.module.css";

export default function BookDetails({ id }: { id: string }) {
  const { book } = useBookDetails({ id });

  if (!book) return null;

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img src={book?.image} alt={book?.title} width="200px" height="300px" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Evita la recarga
              window.history.back();
            }}
          >
            <ArrowLeft width="24px" height="24px" />
          </a>
          <h1>{book?.title}</h1>
        </div>
        <section>
          <ul className={styles.authorList}>
            {book?.authors?.map((author) => (
              <li key={author.name}>
                <AuthorInfo author={author} />
              </li>
            ))}
          </ul>
        </section>
        {book.summaries.length > 0 && (
          <section>
            <h3>Summary</h3>
            <ul>
              {book.summaries.map((summary) => (
                <li key={summary} className={styles.summary}>
                  <p>{summary}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {book.subjects.length > 0 && (
          <section>
            <h3>Subjects</h3>
            <ul>
              {book.subjects.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </section>
        )}
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
