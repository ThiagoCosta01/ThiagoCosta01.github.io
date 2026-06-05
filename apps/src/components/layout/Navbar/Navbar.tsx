import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import ThemeButton from "../../ui/ThemeButton/ThemeButton";
import LanguageButton from "../../ui/LanguageButton/LanguageButton";
import { useLanguage } from "../../../context/LanguageContext";

export default function Navbar() {
    const { t } = useLanguage();
    
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.container}`}>
                <div className={styles.logo}>
                    <Logo mode="full" />
                </div>

                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">{t.navbar.about}</Link>
                    </li>

                    <li>
                        <Link to="/projects">{t.navbar.projects}</Link>
                    </li>

                    <li>
                        <Link to="/certifications">{t.navbar.certifications}</Link>
                    </li>

                    <li>
                        <Link to="/contact">{t.navbar.contact}</Link>
                    </li>

                    <li>
                        <ThemeButton />
                    </li>

                    <li>
                        <LanguageButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
}