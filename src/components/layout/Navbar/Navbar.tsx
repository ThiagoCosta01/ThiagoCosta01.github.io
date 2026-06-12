import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import ThemeButton from "../../ui/ThemeButton/ThemeButton";
import LanguageButton from "../../ui/LanguageButton/LanguageButton";
import { useLanguage } from "../../../context/LanguageContext";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { t } = useLanguage();

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav
            className={`${styles.navbar} ${
                scrolled ? styles.scrolled : ""
            }`}
        >
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Logo mode="full" />
                </div>

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul
                    className={`${styles.menu} ${
                        menuOpen ? styles.menuOpen : ""
                    }`}
                >
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            {t.navbar.about}
                        </Link>
                    </li>

                    <li>
                        <Link to="/projects" onClick={closeMenu}>
                            {t.navbar.projects}
                        </Link>
                    </li>

                    <li>
                        <Link to="/certifications" onClick={closeMenu}>
                            {t.navbar.certifications}
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" onClick={closeMenu}>
                            {t.navbar.contact}
                        </Link>
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