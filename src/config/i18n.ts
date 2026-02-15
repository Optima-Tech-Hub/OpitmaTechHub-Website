import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import translationAR from "../locales/ar/translation.json";
import translationEN from "../locales/en/translation.json";

// Translation resources
const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    resources,
    fallbackLng: "en", // Fallback to English if detection fails
    supportedLngs: ["ar", "en"], // Supported languages
    debug: false, // Set to true for development debugging

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      // Order of language detection: check saved preference first, then browser language
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      // Keys to lookup language from
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      // Cache user language on change
      caches: ["localStorage"],
      // Don't cache on lookup, only on change
      excludeCacheFor: ["cimode"],
      // Convert browser language codes to our supported languages
      convertDetectedLanguage: (lng: string) => {
        // Handle language codes like 'ar-SA', 'en-US', etc.
        const languageCode = lng.split("-")[0];
        return ["ar", "en"].includes(languageCode) ? languageCode : "en";
      },
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
