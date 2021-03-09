import React, {FC, memo} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
} from 'react-native';
import {Carousel} from 'react-native-ui-lib';

import {Colors, Metrics} from '@src/assets';

interface Props {
  data: Array<{
    id: string;
    banner: ImageSourcePropType;
    title: string;
  }>;
}

interface ItemProps {
  banner: ImageSourcePropType;
  title: string;
}

const Item: FC<ItemProps> = ({banner, title}) => (
  <ImageBackground
    source={banner}
    style={styles.imageBackground}
    resizeMode="cover">
    <Text style={styles.textTilte}>{title}</Text>
  </ImageBackground>
);

const Banner: FC<Props> = ({data}) => (
  <Carousel
    autoplay
    loop
    pageControlProps={{
      size: 10,
      inactiveColor: Colors.white,
      color: Colors.orangeCarrot,
      containerStyle: styles.containerStyle,
    }}
    pageControlPosition={Carousel.pageControlPositions.OVER}>
    {data.map((props) => (
      <Item key={props.id} {...props} />
    ))}
  </Carousel>
);

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: -20,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  textTilte: {
    fontSize: 44,
    color: Colors.white,
    maxWidth: Metrics.screen.width / 2 - 30,
    marginLeft: 20,
    fontWeight: 'bold',
    zIndex: 1,
  },
  imageBackground: {
    height: 230,
    justifyContent: 'center',
    display: 'flex',
    zIndex: 0,
  },
});

export default memo<Props>(Banner);
