import React, {FC, memo} from 'react';
import Swiper from 'react-native-swiper';
import {View, StyleSheet} from 'react-native';

import {Colors} from '@src/assets';

interface Props {
  children: React.ReactNode;
  props?: any;
}

const Carousel: FC<Props> = ({children, ...props}) => (
  <Swiper
    loop
    autoplay
    height={230}
    paginationStyle={styles.paginationStyle}
    activeDot={<View style={styles.active} />}
    dot={<View style={styles.inActive} />}
    {...props}>
    {children}
  </Swiper>
);

const styles = StyleSheet.create({
  active: {
    backgroundColor: Colors.orangeCarrot,
    width: 16,
    height: 4,
    borderRadius: 2,
    marginLeft: 4,
    marginRight: 4,
  },
  inActive: {
    backgroundColor: Colors.white,
    width: 8,
    height: 4,
    borderRadius: 2,
    marginLeft: 4,
    marginRight: 4,
  },
  paginationStyle: {
    bottom: -20,
  },
});

export default memo<Props>(Carousel);
