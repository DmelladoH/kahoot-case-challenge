import { Skeleton } from "../ui/skeleton";
import styles from "./bookCard.module.css";

export default function SkeletonCard() {
  return (
    <div className={styles.container}>
      <Skeleton className={styles.skeletonBookCover} />
      <div>
        <div className={styles.skeletonInfoContainer}>
          <Skeleton className={styles.skeletonTitle} />
          <Skeleton className={styles.skeletonAuthor} />
        </div>
      </div>
    </div>
  );
}
