import { Skeleton } from "../../components/ui/skeleton";
import styles from "./bookDetails.module.css";

export default function LoadingState() {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <Skeleton className={styles.skeletonCover} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <Skeleton className={styles.skeletonTitle} />
        </div>
        <div>
          <Skeleton className={styles.skeletonAuthor} />
        </div>
        <div>
          <Skeleton className={styles.skeletonSummary} />
        </div>
        <div>
          <Skeleton className={styles.skeletonSubjects} />
        </div>
      </div>
    </div>
  );
}
