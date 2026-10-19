import { createContext, useEffect, useContext, useState } from "react";
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
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" ? "en" : "pt";
  });

  function toggleLang() {
    setLang((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem("lang", next);
      return next;
    });
  }

  const t = lang === "pt" ? pt : en;

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.seo.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.seo.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", t.seo.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", lang === "pt" ? "pt_BR" : "en_US");
  }, [lang, t]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
