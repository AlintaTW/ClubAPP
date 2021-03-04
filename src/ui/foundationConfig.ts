import {BorderRadiuses, Typography, Spacings} from 'react-native-ui-lib';
import {Platform} from 'react-native';

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
  fs24: {
    fontSize: 24,
  },
  fs20: {
    fontSize: 20,
  },
  fs19: {
    fontSize: 19,
  },
  fs18: {
    fontSize: 18,
  },
  fs17: {
    fontSize: 17,
  },
  fs16: {
    fontSize: 16,
  },
  fs15: {
    fontSize: 15,
  },
  fs14: {
    fontSize: 14,
  },
  fs12: {
    fontSize: 12,
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
