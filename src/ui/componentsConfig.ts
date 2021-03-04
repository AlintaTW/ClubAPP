import {ThemeManager} from 'react-native-ui-lib';
import {Fonts} from '@src/assets';
import i18n from 'i18n-js';

ThemeManager.setComponentTheme('Text', {
  fontFamily:
    i18n.locale === 'en'
      ? Fonts.fontFamilyCustom.CanelaRegular
      : Fonts.fontFamilyCustom.FangZhengHeiTiFanTi,
});
