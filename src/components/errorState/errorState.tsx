import { Link } from "wouter";
import { Button } from "../../components/ui/button";
import styles from "./errorState.module.css";

export default function ErrorState() {
  return (
    <div className={styles.errorContainer}>
      <span> There is been an error :( </span>
      <div>
        <Button asChild variant="primary">
          <Link to={"/"}>Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
