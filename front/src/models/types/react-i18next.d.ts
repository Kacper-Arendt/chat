import { resources, defaultNS } from 'config/i18nConfig';

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS;
		resources: {
			ns1: typeof resources['en'];
			ns2: typeof resources['pl'];
		};
	}
}
