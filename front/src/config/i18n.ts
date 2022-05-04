import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import generalPl from "utils/translations/pl/translation.json";
import generalEn from "utils/translations/en/translation.json";

export const defaultNS = "translation";
export const resources = {
  pl: {
    translation: {
      ...generalPl,
    },
  },
  en: {
    translation: {
      ...generalEn,
    },
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["translation"],
  defaultNS,
  resources,
});

export default i18n;
