import {BorderRadiuses, Typography, Spacings} from 'react-native-ui-lib';
import {Platform} from 'react-native';
import {actuatedNormalize} from '@src/untils/viewScale';

BorderRadiuses.loadBorders({
  br10: 10,
  br20: 20,
  br30: 30,
});

Spacings.loadSpacings({
  card: 20,
});

Typography.loadTypographies({
  bold: {
    fontWeight: 'bold',
  },
  fs44: {
    fontSize: actuatedNormalize(44),
  },
  fs40: {
    fontSize: actuatedNormalize(40),
  },
  fs28: {
    fontSize: actuatedNormalize(28),
  },
  fs24: {
    fontSize: actuatedNormalize(24),
  },
  fs22: {
    fontSize: actuatedNormalize(22),
  },
  fs20: {
    fontSize: actuatedNormalize(20),
  },
  fs19: {
    fontSize: actuatedNormalize(19),
  },
  fs18: {
    fontSize: actuatedNormalize(18),
  },
  fs17: {
    fontSize: actuatedNormalize(17),
  },
  fs16: {
    fontSize: actuatedNormalize(16),
  },
  fs15: {
    fontSize: actuatedNormalize(15),
  },
  fs14: {
    fontSize: actuatedNormalize(14),
  },
  fs12: {
    fontSize: actuatedNormalize(13),
  },
  fs10: {
    fontSize: actuatedNormalize(10),
  },
  fs8: {
    fontSize: actuatedNormalize(8),
  },
  fw9: {
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
  },
  fw8: {
    fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
  },
  fw7: {
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
  },
  fw6: {
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
  },
  fw5: {
    fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
  },
  fw4: {
    fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
  },
  fw3: {
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
  },
  fw2: {
    fontWeight: Platform.OS === 'ios' ? '200' : 'normal',
  },
  fw1: {
    fontWeight: Platform.OS === 'ios' ? '100' : 'normal',
  },
});
