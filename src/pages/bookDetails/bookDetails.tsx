import ArrowLeft from "../../assets/svgs/arrowLeft";
import EmptyState from "../../components/emptyState/emptyState";
import ErrorState from "../../components/errorState/errorState";
import { LoadingErrorWrapper } from "../../components/loadingErrorWrapper";
import useBookDetails from "../../hooks/useBookDetails";
import { BookDetail } from "../../types";
import styles from "./bookDetails.module.css";
import AuthorList from "./components/authorList/authorList";
import SubjectList from "./components/subjects/subjectList";
import SummaryList from "./components/summary/summaryList";
import LoadingState from "./loadingState";

export default function BookDetails({ id }: { id: string }) {
  const { book, isError, isPending } = useBookDetails({ id });

  return (
    <LoadingErrorWrapper
      loading={isPending}
      error={isError}
      loadingFallback={<LoadingState />}
      errorFallback={<ErrorState />}
    >
      {book ? <Content book={book} /> : <EmptyState />}
    </LoadingErrorWrapper>
  );
}

function Content({ book }: { book: BookDetail }) {
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
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeft width="24px" height="24px" />
          </a>
          <h1>{book?.title}</h1>
        </div>
        <section>
          <AuthorList authors={book.authors} />
        </section>
        {book.summaries.length > 0 && (
          <section>
            <h3>Summary</h3>
            <SummaryList summaries={book.summaries} />
          </section>
        )}
        {book.subjects.length > 0 && (
          <section>
            <h3>Subjects</h3>
            <SubjectList subjects={book.subjects} />
          </section>
        )}
      </div>
    </div>
  );
}
