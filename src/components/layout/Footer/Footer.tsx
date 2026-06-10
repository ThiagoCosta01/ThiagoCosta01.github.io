import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <Logo mode="simbol" />
                    <p>Backend Developer | Java | Spring Boot</p>
                </div>

                <div className={styles.links}>
                    <a
                        href="https://github.com/ThiagoCosta01"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/thiago-costa-dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="mailto:seuemail@email.com">
                        Contato
                    </a>
                </div>
            </div>

            <div className={styles.bottom}>
                © {new Date().getFullYear()} Thiago Costa
            </div>
        </footer>
    );

}