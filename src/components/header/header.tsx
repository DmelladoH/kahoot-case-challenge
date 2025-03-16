import GitHub from "../../assets/svgs/github";
import { repoURL } from "../../constants";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <a href={"/"} className={styles.link}>
        <img
          width="auto"
          height="40px"
          src="/logo-header.webp"
          alt="actimo a Kahoot! company"
        />
      </a>

      <a href={repoURL} className={styles.link}>
        <GitHub width="24px" height="auto" />
      </a>
    </header>
  );
}
