import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import styles from "./PageLayout.module.css";

export default function PageLayout({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <header className={styles.header}>
          <Link className={styles.back} to="/">← Thiago Costa</Link>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        {children}
      </main>
    </>
  );
}
