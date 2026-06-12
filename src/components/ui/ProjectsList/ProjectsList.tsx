import { projects } from "../../../data/projects";
import { useLanguage } from "../../../context/LanguageContext";
import ProjectCard from "../ProjectCard/ProjectCard";


import styles from "./ProjectsList.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { GeneralIcons } from "../../../config/GeneralIcons";

export default function ProjectsList() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
    });
    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const { t } = useLanguage();

    return (
        <section id="ProjectsList" className={styles.container}>
            <div className={styles.content}>

                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.general.projects}
                    </h2>

                    <div className={styles.rightSection}>
                        <span className={styles.projectCount}>
                            {projects.length} {t.general.projects}
                        </span>

                        <div className={styles.controls}>
                            <button
                                className={styles.arrowButton}
                                onClick={scrollPrev}
                                aria-label="Projeto anterior"
                            >
                                <GeneralIcons.left color="var(--text)" size={18} />
                            </button>

                            <button
                                className={styles.arrowButton}
                                onClick={scrollNext}
                                aria-label="Próximo projeto"
                                
                            >
                                <GeneralIcons.right color="var(--text)" size={18} />
                            </button>
                        </div>
                    </div>
                </div>


                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        {projects.map((project) => {
                            const keyCast =
                                project.id as keyof typeof t.projects;

                            return (
                                <div
                                    className={styles.emblaSlide}
                                    key={project.id}
                                >
                                    <ProjectCard
                                        title={t.projects[keyCast].title}
                                        subtitle={t.projects[keyCast].subtitle}
                                        description={
                                            t.projects[keyCast].description
                                        }
                                        picture={project.picture}
                                        technologies={project.technologies}
                                        link={project.link}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}