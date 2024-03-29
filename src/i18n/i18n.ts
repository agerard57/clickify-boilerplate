import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { Languages } from "@clickify/clickify-common";

import { resources } from "./resources";

const lng = [Languages.FR, Languages.EN];

i18n
  .use(new LanguageDetector())
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    detection: {
      order: ["querystring", "localStorage"],
      lookupQuerystring: "lng",
    },
    fallbackLng: Languages.EN,
    interpolation: { escapeValue: false },
    preload: lng,
    react: {
      bindI18n: "languageChanged",
      useSuspense: true,
    },
    resources,
    returnObjects: true,
    supportedLngs: lng,
  });

export { i18n };
