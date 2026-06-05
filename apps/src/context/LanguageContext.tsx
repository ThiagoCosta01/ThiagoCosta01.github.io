import { createContext, useContext, useState } from "react";
import { en } from "../i18n/en";
import { pt } from "../i18n/pt";

type Lang = "pt" | "en";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: typeof pt;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem("lang") as Lang) || "pt"
  );

  function toggleLang() {
    setLang((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem("lang", next);
      return next;
    });
  }

  const t = lang === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}