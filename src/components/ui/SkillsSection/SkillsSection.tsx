import { techIcons } from "../../../config/techIcons";
import { useLanguage } from "../../../context/LanguageContext";
import styles from "./SkillsSection.module.css";

type TechId = keyof typeof techIcons;

interface Skill {
    id: TechId;
    label: string;
}

const skills: Skill[] = [
    {
        id: "java",
        label: "Java",
    },
    {
        id: "springboot",
        label: "Spring Boot",
    },
    {
        id: "react",
        label: "React",
    },
    {
        id: "typescript",
        label: "TypeScript",
    },
    {
        id: "docker",
        label: "Docker",
    },
    {
        id: "mysql",
        label: "MySQL",
    },
    {
        id: "postgres",
        label: "PostgreSQL",
    },
    {
        id: "javascript",
        label: "JavaScript",
    },
    {
        id: "css",
        label: "CSS",
    },
    {
        id: "nginx",
        label: "Nginx",
    },
    {
        id: "windows",
        label: "Windows",
    },
    {
        id: "grafana",
        label: "Grafana",
    },
    {
        id: "keycloak",
        label: "Keycloak",
    },
    {
        id: "angular",
        label: "Angular",
    },
    {
        id: "csharp",
        label: "C#",
    },
    {
        id: "wpf",
        label: "WPF",
    },
];

export default function SkillsSection() {
    const { t } = useLanguage();

    return (
        <section id="skills" className={styles.container}>
            <div className={styles.content}>

                <div className={styles.header}>
                    <span className={styles.tag}>
                        {t.skillsSection.sectionName}
                    </span>

                    <h2 className={styles.title}>
                        {t.skillsSection.title}
                    </h2>
                </div>

                <div className={styles.icons}>
                    {skills.map((skill) => {
                        const Icon = techIcons[skill.id as keyof typeof techIcons];

                        return (
                            <div
                                key={skill.id}
                                className={styles.skill}
                            >
                                {Icon && (
                                    <Icon
                                        className={styles.skillIcon}
                                        size={20}
                                    />
                                )}

                                <span>{skill.label}</span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}