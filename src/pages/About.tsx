import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import { useLanguage } from "../context/LanguageContext";
import styles from "./PageLayout.module.css";

export default function About() {
  const { t } = useLanguage();
  const content = t.pages.about;
  return <PageLayout eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
    <section className={styles.section}>
      <h2>{content.experienceTitle}</h2>
      <div className={styles.cardGrid}>
        {content.points.map((point) => <article className={styles.card} key={point}><h3>→</h3><p>{point}</p></article>)}
      </div>
      <div className={styles.actions}><Link className={styles.action} to="/projects">{content.cta} →</Link></div>
    </section>
  </PageLayout>;
}
