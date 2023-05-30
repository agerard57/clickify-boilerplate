import { i18n as TestPage } from "@/testPage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Modules = Record<string, { fr: any; en: any }>;

const normalize = (modules: Modules, formatNamespace: (name: string) => string = (name) => name) =>
  Object.entries(modules).reduce(
    ({ fr, en }, [namespace, translations]) => ({
      fr: { ...fr, [formatNamespace(namespace)]: translations.fr },
      en: { ...en, [formatNamespace(namespace)]: translations.en },
    }),
    { fr: {}, en: {} },
  );

const moduleResources = normalize({
  TestPage,
});

export const resources = {
  fr: { ...moduleResources.fr },
  en: { ...moduleResources.en },
};
