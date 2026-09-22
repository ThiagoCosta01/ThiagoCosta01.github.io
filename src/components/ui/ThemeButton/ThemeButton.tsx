import { GeneralIcons } from "../../../config/GeneralIcons";
import { useTheme } from "../../../hooks/useTheme";
import styles from "./ThemeButton.module.css";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.button} >
      {theme === "light" ? <GeneralIcons.moon /> : <GeneralIcons.sun />}
    </button>
  );
}