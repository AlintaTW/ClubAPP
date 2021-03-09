import {Platform, PixelRatio} from 'react-native';
import {Metrics} from '@src/assets';

// based on width of device in Design
const scale = Metrics.screen.width / 414;
// Ref: https://stackoverflow.com/questions/57114354/react-native-responsive-font-size
export function actuatedNormalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
