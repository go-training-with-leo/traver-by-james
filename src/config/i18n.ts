import { resources } from '@/translations';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export { i18n, useTranslation };
export { t } from 'i18next';

