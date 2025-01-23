// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationCA from './locales/ca.json';
import translationES from './locales/es.json';

const resources = {
  ca: {
    translation: translationCA,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ca', // idioma por defecto
    fallbackLng: 'ca',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;