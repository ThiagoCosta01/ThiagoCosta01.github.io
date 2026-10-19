import PageLayout from "./PageLayout";
import { useLanguage } from "../context/LanguageContext";
import styles from "./PageLayout.module.css";

export default function Contact() {
  const { t } = useLanguage();
  const content = t.pages.contact;
  return <PageLayout eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
    <section className={styles.cardGrid}>
      <article className={styles.card}><h3>{content.email}</h3><p>thiago10lscbf@gmail.com</p><div className={styles.actions}><a className={styles.action} href="mailto:thiago10lscbf@gmail.com">{content.email} →</a></div></article>
      <article className={styles.card}><h3>{content.linkedin}</h3><p>linkedin.com/in/thiago-costa-dev</p><div className={styles.actions}><a className={styles.action} href="https://linkedin.com/in/thiago-costa-dev" target="_blank" rel="noreferrer">{content.linkedin} →</a></div></article>
      <article className={styles.card}><h3>{content.github}</h3><p>github.com/ThiagoCosta01</p><div className={styles.actions}><a className={styles.action} href="https://github.com/ThiagoCosta01" target="_blank" rel="noreferrer">{content.github} →</a></div></article>
      <article className={styles.card}><h3>{content.cv}</h3><p>Currículo atualizado para oportunidades profissionais.</p><div className={styles.actions}><a className={styles.action} href={t.curriculum.link} target="_blank" rel="noreferrer">{content.cv} →</a></div></article>
    </section>
  </PageLayout>;
}
