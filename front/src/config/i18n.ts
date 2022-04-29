import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import generalPl from 'utils/translations/pl/translation.json';
import generalEn from 'utils/translations/en/translation.json';

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
};

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	debug: true,
});

export default i18n;
