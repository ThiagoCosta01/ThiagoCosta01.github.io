import { useLanguage } from "../../../context/LanguageContext";
import styles from "./LanguageButton.module.css";

export default function LanguageButton() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button onClick={toggleLang} className={`${styles.button}`}>
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}