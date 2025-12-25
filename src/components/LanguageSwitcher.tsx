"use client";

import { languages } from "@/util/languages";
import i18n from "../i18n";

export default function LanguageSwitcher() {
  const ChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => ChangeLanguage(lang.code)}
          style={{ marginRight: "0.5rem" }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
