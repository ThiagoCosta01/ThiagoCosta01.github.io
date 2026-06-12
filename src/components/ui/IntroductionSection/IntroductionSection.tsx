import { useLanguage } from "../../../context/LanguageContext";
import styles from "./IntroductionSection.module.css";
import meImage from "../../../assets/images/me2.png";
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

                        <div className={styles.stack}>
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>Docker</span>
                            <span>MySQL</span>
                            <span>React</span>
                        </div>

                        <p>
                            {t.introductionSection.text}
                        </p>

                        <div className={styles.actions}>

                            <PrimaryButton
                                text="Download CV"
                                bgColor="transparent"
                                textColor="var(--primary-color)"
                                borderColor="var(--primary-color)"
                                href={t.curriculum.link}
                                icon={<GeneralIcons.donwload />}
                            />

                            <PrimaryButton
                                text={t.buttons.seeProjects}
                                href="#ProjectsList"
                                target="_self"
                                icon={<GeneralIcons.down />}
                            />

                        </div>
                    </div>

                    <div className={styles.picture}>
                        <img src={meImage} alt="" />
                    </div>

                    <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <code>
                            $ java --version<br />
                            Java 21<br /><br />

                            $ docker ps<br />
                            running ✓<br /><br />

                            $ spring-boot run<br />
                            started ✓
                        </code>
                    </div>
                </div>
            </div>
        </>
    )
}