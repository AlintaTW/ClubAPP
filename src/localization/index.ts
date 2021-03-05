import i18n from 'i18n-js';
import locales from './locales';

i18n.defaultLocale = 'zh';
i18n.locale = 'zh';
i18n.fallbacks = true;
i18n.translations = locales;
i18n.missingBehaviour = 'guess';

export default i18n;
