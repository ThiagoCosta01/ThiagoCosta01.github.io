import { techIcons } from "../../../config/techIcons";
import type { Project } from "../../../types/Project";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = Project;

export default function ProjectCard({
    title,
    description,
    picture,
    technologies,
    link,
    subtitle
}: ProjectCardProps) {
    return (
        <div className={styles.container}>
            <a href={link}>

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

                    <div className={styles.technologies}>
                        {technologies?.map((tech) => {
                            const Icon = techIcons[tech as keyof typeof techIcons];

                            return Icon ? <Icon key={tech} /> : null;
                        })}
                    </div>
                </div>
            </a>
        </div>
    );
}