import { Button } from "../ui/button";
import styles from "./listFooter.module.css";

interface Props {
  page: number;
  next: () => void;
  prev: () => void;
}

export default function ListFooter({ page, next, prev }: Props) {
  return (
    <div className={styles.container}>
      <Button asChild variant="secondary">
        <a onClick={prev}>Prev</a>
      </Button>
      <div>{page}</div>
      <Button asChild variant="secondary">
        <a onClick={next}>Next</a>
      </Button>
    </div>
  );
}
