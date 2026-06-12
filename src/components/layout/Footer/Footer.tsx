import { GeneralIcons } from "../../../config/GeneralIcons";
import { useLanguage } from "../../../context/LanguageContext";
import styles from "./Footer.module.css";


const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.profile}>
                    <h2 className={styles.profileTitle}>{t.general.myName}</h2>

                    <p className={styles.profileRole}>{t.general.myDescription}</p>

                    <p className={styles.profileDescription}>{t.footer.main.text}</p>

                    <p className={styles.availability}>{t.footer.main.secondaryText}</p>

                    <div className={styles.socials}>
                        <a
                            href="https://github.com/ThiagoCosta01"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialIcon}
                            aria-label="GitHub"
                        >
                            <GeneralIcons.github />
                        </a>

                        <a
                            href="https://linkedin.com/in/thiago-costa-dev"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialIcon}
                            aria-label="LinkedIn"
                        >
                            <GeneralIcons.linkedin />
                        </a>

                        <a
                            href="mailto:thiago10lscbf@gmail.com"
                            className={styles.socialIcon}
                            aria-label="Email"
                        >
                            <GeneralIcons.envelope />
                        </a>
                    </div>
                </div>

                <div className={styles.linksArea}>
                    <div className={styles.column}>
                        <h3 className={styles.colTitle}>
                            NAVIGATION
                        </h3>

                        <ul className={styles.colList}>
                             <li>
                                <a href="/" className={styles.colLink}>
                                    {t.navbar.home}
                                </a>
                            </li>
                            <li>
                                <a href="/about" className={styles.colLink}>
                                    {t.navbar.about}
                                </a>
                            </li>

                            <li>
                                <a href="/projects" className={styles.colLink}>
                                    {t.navbar.projects}
                                </a>
                            </li>

                            <li>
                                <a href="/certifications" className={styles.colLink}>
                                    {t.navbar.certifications}
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className={styles.colLink}>
                                    {t.navbar.contact}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.colTitle}>
                            {t.footer.stack}
                        </h3>

                        <div className={styles.techList}>
                            <span className={styles.techBadge}>
                                Java
                            </span>

                            <span className={styles.techBadge}>
                                Spring Boot
                            </span>

                            <span className={styles.techBadge}>
                                Node.js
                            </span>

                            <span className={styles.techBadge}>
                                Docker
                            </span>

                            <span className={styles.techBadge}>
                                MySQL
                            </span>

                            <span className={styles.techBadge}>
                                React
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <span className={styles.copyright}>
                    © 2026 Thiago Costa
                </span>

                <a
                    href="#top"
                    className={styles.backToTop}
                >
                    {t.footer.backToTop} ↑
                </a>
            </div>
        </footer>
    );
};

export default Footer;