import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import indonesia from "./locales/id/translations.json";
import englishUS from "./locales/en/translations.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      id: {
        translations: indonesia,
      },
      en: {
        translations: englishUS,
      },
    },
    fallbackLng: "en-US",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },
  });

export default i18n;
