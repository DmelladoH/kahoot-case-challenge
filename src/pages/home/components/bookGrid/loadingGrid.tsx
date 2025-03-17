import SkeletonCard from "../bookCard/skeletonCard";
import styles from "./bookGrid.module.css";

export function LoadingGrid() {
  return (
    <div className={styles.container}>
      <ul className="bookList gallery">
        {[...Array(10)].map((_, i) => (
          <li key={i} className="card">
            <SkeletonCard />
          </li>
        ))}
      </ul>
    </div>
  );
}
