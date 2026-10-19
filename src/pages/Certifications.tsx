import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import { useLanguage } from "../context/LanguageContext";
import styles from "./PageLayout.module.css";

export default function Certifications() {
  const { t } = useLanguage();
  const content = t.pages.certifications;
  return <PageLayout eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
    <section className={styles.cardGrid}>
      <article className={styles.card}><h3>Prática aplicada</h3><p>Minha experiência prática em APIs, sistemas corporativos, automação e infraestrutura pode ser explorada na seleção de projetos.</p></article>
      <article className={styles.card}><h3>Em atualização</h3><p>Novas certificações e formações serão adicionadas aqui com seus respectivos links e datas.</p></article>
    </section>
    <div className={styles.actions}><Link className={styles.action} to="/projects">{content.cta} →</Link></div>
  </PageLayout>;
}
