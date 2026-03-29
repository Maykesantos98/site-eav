"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type TranslationData = (typeof translations)["pt"] | (typeof translations)["en"];

type LangCtx = {
  lang: Lang;
  t: TranslationData;
  toggle: () => void;
};

const Ctx = createContext<LangCtx>({
  lang: "pt",
  t: translations.pt,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("eav-lang") as Lang | null;
    if (saved && (saved === "pt" || saved === "en")) setLang(saved);
  }, []);

  const toggle = () => {
    const next = lang === "pt" ? "en" : "pt";
    setLang(next);
    localStorage.setItem("eav-lang", next);
  };

  return (
    <Ctx.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  return useContext(Ctx);
}
