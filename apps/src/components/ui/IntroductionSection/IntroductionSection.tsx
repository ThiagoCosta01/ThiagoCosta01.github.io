import { useLanguage } from "../../../context/LanguageContext";
import styles from "./IntroductionSection.module.css"
import developerImage from "../../../assets/images/developer.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { GeneralIcons } from "../../../config/GeneralIcons";

export default function IntroductionSection() {
    const { t } = useLanguage();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>

                    <div className={styles.texts}>
                        <span className={styles.greeting}>
                            {t.introductionSection.introText}
                        </span>

                        <h1>
                            {t.introductionSection.name}
                        </h1>

                        <p>
                            {t.introductionSection.text}
                        </p>

                    <div className={styles.actions}>
                        <a href="#projects">
                            <PrimaryButton
                                text="Ver Projetos"
                                href="#ProjectsList"
                                target="_self"
                                icon={<GeneralIcons.down />}
                            />
                        </a>

                        <a
                            href="/curriculo.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <PrimaryButton
                                text="Download CV"
                                bgColor="transparent"
                                textColor="var(--primary-color)"
                                borderColor="var(--primary-color)"
                                href={t.curriculum.link}
                                icon={<GeneralIcons.donwload

                                />}
                            />
                        </a>
                    </div>
                    </div>
                    <div>
                        <img src={developerImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}