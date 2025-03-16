import Header from "../components/header/header";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
