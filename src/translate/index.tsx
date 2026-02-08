import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es/es.json";
import en from "./en/en.json";
import ca from "./ca/ca.json";
import de from "./de/de.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    ca: { translation: ca },
    de: { translation: de },
  },
  lng: "es", // Default language
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, // React already safe from XSS
  },
});

export default i18n;
