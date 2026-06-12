import { useLanguage } from "../../../context/LanguageContext";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h3>{t.aboutMeSection.backendCard.title}</h3>
                        <p>{t.aboutMeSection.backendCard.description}</p>
                        <span>{t.aboutMeSection.backendCard.subtitle}</span>
                    </div>

                    <div className={styles.card}>
                        <h3>{t.aboutMeSection.InfrastructureCard.title}</h3>
                        <p>{t.aboutMeSection.InfrastructureCard.description}</p>
                        <span>{t.aboutMeSection.InfrastructureCard.subtitle}</span>
                    </div>

                    <div className={styles.card}>
                        <h3>{t.aboutMeSection.architectureCard.title}</h3>
                        <p>{t.aboutMeSection.architectureCard.description}</p>
                        <span>{t.aboutMeSection.architectureCard.subtitle}</span>
                    </div>
                </div>

                <div className={styles.textContent}>
                    <span className={styles.label}>{t.aboutMeSection.sectionName}</span>

                    <h2>{t.aboutMeSection.title}</h2>

                    <h3>{t.aboutMeSection.subtitle}</h3>

                    <p>
                        {t.aboutMeSection.text}
                    </p>

                    <p>
                        {t.aboutMeSection.text2}
                    </p>
                </div>
            </div>
        </section>
    );
}