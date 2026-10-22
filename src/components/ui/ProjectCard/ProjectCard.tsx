import { GeneralIcons } from "../../../config/GeneralIcons";
import { techIcons } from "../../../config/techIcons";
import type { Project } from "../../../types/Project";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  description,
  picture,
  technologies,
  subtitle,
  link,
  repositoryURL,
  hostedURL,
  imageURL,
  otherURL,
}: ProjectCardProps) {
  const content = (
    <>
      <div className={styles.picture}>
        {picture ? (
          <img src={picture} alt={`Prévia do projeto ${title}`} loading="lazy" />
        ) : (
          <span className={styles.pictureFallback}>Prévia indisponível</span>
        )}
      </div>

      <div className={styles.texts}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>

        {subtitle && (
          <div className={styles.subtitle}>
            <p>{subtitle}</p>
          </div>
        )}

        <div className={styles.description}>
          <p>{description}</p>
        </div>

        {link && <span className={styles.detailsLabel}>Ver projeto →</span>}
      </div>
    </>
  );

  return (
    <article className={styles.container}>
      {link ? (
        <a
          className={styles.items}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver projeto ${title} em uma nova aba`}
        >
          {content}
        </a>
      ) : (
        <div className={styles.items}>{content}</div>
      )}

      <div className={styles.icons}>
        <div className={styles.showProjectLinks} aria-label="Links do projeto">
          {hostedURL && (
            <a
              href={hostedURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir demonstração de ${title} em uma nova aba`}
              title="Demonstração"
            >
              <GeneralIcons.externalLink aria-hidden="true" />
            </a>
          )}

          {repositoryURL && (
            <a
              href={repositoryURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir repositório de ${title} em uma nova aba`}
              title="Repositório"
            >
              <GeneralIcons.github aria-hidden="true" />
            </a>
          )}

          {imageURL && (
            <a
              href={imageURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir imagem de ${title} em uma nova aba`}
              title="Imagem"
            >
              <GeneralIcons.picture aria-hidden="true" />
            </a>
          )}

          {otherURL && (
            <a
              href={otherURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir link relacionado a ${title} em uma nova aba`}
              title="Link relacionado"
            >
              <GeneralIcons.externalLink3 aria-hidden="true" />
            </a>
          )}
        </div>

        <div className={styles.technologies} aria-label="Tecnologias utilizadas">
          {technologies?.map((tech) => {
            const Icon = techIcons[tech as keyof typeof techIcons];

            return Icon ? (
              <span className={styles.technology} key={tech} title={tech}>
                <Icon aria-hidden="true" />
                <span className={styles.srOnly}>{tech}</span>
              </span>
            ) : null;
          })}
        </div>
      </div>
    </article>
  );
}
