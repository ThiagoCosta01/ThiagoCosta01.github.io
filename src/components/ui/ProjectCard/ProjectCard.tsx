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
    return (
        <div className={styles.container}>
            <a className={styles.items} href={link} target="_blank">

                <div className={styles.picture}>
                    {picture && <img src={picture} alt={title} />}
                </div>

                <div className={styles.texts}>
                    <div className={styles.title}>
                        <h4>{title} </h4>
                    </div>
                    <div className={styles.subtitle}>
                        {subtitle && <h5>{subtitle}</h5>}
                    </div>

                    <div className={styles.description}>
                        <p>{description}</p>
                    </div>

                </div>

                <div className={`${styles.icons}`}>
                    <div className={styles.showProjectLinks}>

                        {hostedURL && (
                            <a
                                href={hostedURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Live Website"
                            >
                                <GeneralIcons.externalLink />
                            </a>
                        )}

                        {repositoryURL && (
                            <a
                                href={repositoryURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Repo"
                            >
                                <GeneralIcons.github />
                            </a>
                        )}

                        {imageURL && (
                            <a
                                href={imageURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Image"
                            >
                                <GeneralIcons.picture />
                            </a>
                        )}

                        {otherURL && (
                            <a
                                href={otherURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Live Website"
                            >
                                <GeneralIcons.externalLink3 />
                            </a>
                        )}

                    </div>

                    <div className={styles.technologies}>
                        {technologies?.map((tech) => {
                            const Icon = techIcons[tech as keyof typeof techIcons];

                            return Icon ? <Icon key={tech} className={styles.technology} title={tech} /> : null;
                        })}
                    </div>

                </div>
            </a>
        </div>
    );
}