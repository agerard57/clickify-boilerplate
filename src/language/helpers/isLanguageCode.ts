import { Languages } from "@clickify/clickify-common";

type LanguageCode = Languages.EN | Languages.FR;

export const isLanguageCode = (code: string): code is LanguageCode => code === Languages.EN || code === Languages.FR;
