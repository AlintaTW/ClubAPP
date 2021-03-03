import i18n from 'i18n-js';
import locales from './locales';

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = locales;
i18n.missingBehaviour = 'guess';

export default i18n;
