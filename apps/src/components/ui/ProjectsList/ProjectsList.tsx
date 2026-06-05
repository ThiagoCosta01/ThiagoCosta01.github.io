
import { projects } from "../../../data/projects";
import { useLanguage } from "../../../context/LanguageContext";

import ProjectCard from "../ProjectCard/ProjectCard";

import styles from "./ProjectsList.module.css";
import useEmblaCarousel from "embla-carousel-react";

export default function ProjectsList() {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    const { t } = useLanguage();

    return (
        <>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {projects.map((project) => (
                        <div className={styles.emblaSlide} key={project.id}>
                            <ProjectCard
                                title={t.projects[project.id].title}
                                subtitle={t.projects[project.id].subtitle}
                                description={t.projects[project.id].description}
                                picture={project.picture}
                                technologies={project.technologies}
                                link={project.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}