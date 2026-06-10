import { GeneralIcons } from "../../../config/GeneralIcons";
import { useTheme } from "../../../hooks/useTheme";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <GeneralIcons.moon /> : <GeneralIcons.sun color="var(--text)" />}
    </button>
  );
}