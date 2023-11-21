import { TFunction } from "i18next";
import { useState } from "react";

import { Languages } from "@clickify/clickify-common";

import { i18n } from "../../i18n";
import { isLanguageCode } from "../helpers";

export function useLanguage(): {
  language: Languages;
  change: (lang: Languages) => Promise<TFunction>;
} {
  if (!isLanguageCode(i18n.language)) throw new Error(`Unknown language code: ${i18n.language}`);

  const [language, setLang] = useState<Languages>(i18n.language);
  const change = (lang: Languages) => i18n.changeLanguage(lang);

  i18n.on("languageChanged", (newLanguage: string) => {
    if (!isLanguageCode(newLanguage)) throw new Error(`Unknown language code: ${newLanguage}`);
    setLang(newLanguage);
  });

  return { language, change };
}
