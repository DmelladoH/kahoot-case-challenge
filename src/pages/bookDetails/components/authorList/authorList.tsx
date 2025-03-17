import { Person } from "../../../../types";
import { AuthorInfo } from "../authorInfo/authorInfo";
import styles from "./authorList.module.css";

interface Props {
  authors: Person[];
}
export default function AuthorList({ authors }: Props) {
  return (
    <ul className={styles.authorList}>
      {authors.map((author) => (
        <li key={author.name}>
          <AuthorInfo author={author} />
        </li>
      ))}
    </ul>
  );
}
