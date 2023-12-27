import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from "./en/en.json";
import translationsAR from "./ar/ar.json";
const resources = {
  en: {
    translation: translationsEN,
  },
  ar: {
    translation: translationsAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  initImmediate: false,
});

export default i18n;
