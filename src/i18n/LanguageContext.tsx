"use client";

import { createContext, useContext, useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import en from "./en";
import fr from "./fr";
import type { Translations } from "./en";

export type Locale = "en" | "fr";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

const translations: Record<Locale, Translations> = { en, fr };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [transitioning, setTransitioning] = useState(false);
  const pendingLocale = useRef<Locale | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "fr") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    if (l === locale) return;
    pendingLocale.current = l;
    setTransitioning(true);

    setTimeout(() => {
      setLocaleState(l);
      localStorage.setItem("locale", l);
      pendingLocale.current = null;
      requestAnimationFrame(() => {
        setTransitioning(false);
      });
    }, 250);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      <div
        className="locale-transition"
        style={{
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? "translateY(4px)" : "none",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
