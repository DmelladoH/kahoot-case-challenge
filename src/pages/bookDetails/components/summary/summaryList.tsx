import styles from "./summaryList.module.css";

interface Props {
  summaries: string[];
}
export default function SummaryList({ summaries }: Props) {
  return (
    <ul>
      {summaries.map((summary) => (
        <li key={summary} className={styles.summary}>
          <p>{summary}</p>
        </li>
      ))}
    </ul>
  );
}
