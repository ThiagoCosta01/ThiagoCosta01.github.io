import PageLayout from "./PageLayout";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import styles from "./PageLayout.module.css";

export default function Projects() {
  const { t } = useLanguage();
  const content = t.pages.projects;
  return <PageLayout eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
    <section className={styles.projects} aria-label={content.eyebrow}>
      {projects.map((project) => {
        const details = t.projects[project.id as keyof typeof t.projects];
        return <article className={styles.project} key={project.id}>
          <img src={project.picture} alt={details.title} loading="lazy" />
          <div className={styles.projectBody}>
            <h2>{details.title}</h2><small>{details.subtitle}</small><p>{details.description}</p>
            <div className={styles.projectLinks}>
              {project.hostedURL && <a href={project.hostedURL} target="_blank" rel="noreferrer">Demo ↗</a>}
              {project.repositoryURL && <a href={project.repositoryURL} target="_blank" rel="noreferrer">GitHub ↗</a>}
              {project.link && !project.hostedURL && <a href={project.link} target="_blank" rel="noreferrer">Saiba mais ↗</a>}
            </div>
          </div>
        </article>;
      })}
    </section>
    <p className={styles.note}>{content.privateNote}</p>
  </PageLayout>;
}
