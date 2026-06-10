
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
            <div id="ProjectsList" className={styles.container}>
                <div className={styles.content}>

                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>PORTFÓLIO</span>
                        <h2 className={styles.sectionTitle}>Projetos</h2>
                    </div>
                    <div className={styles.embla} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {projects.map((project) => {
                                const keyCast = project.id as keyof typeof t.projects;
                                return (

                                    <div className={styles.emblaSlide} key={keyCast}>
                                        <ProjectCard
                                            title={t.projects[keyCast].title}
                                            subtitle={t.projects[keyCast].subtitle}
                                            description={t.projects[keyCast].description}
                                            picture={project.picture}
                                            technologies={project.technologies}
                                            link={project.link}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}