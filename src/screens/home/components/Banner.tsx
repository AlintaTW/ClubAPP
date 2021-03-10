import React, {FC, memo} from 'react';
import {ImageBackground, ImageSourcePropType, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

import {Colors, Metrics} from '@src/assets';
import {Carousel} from '@src/screens/components';

interface Props {
  data: Array<{
    id: string;
    banner: ImageSourcePropType;
    title: string;
  }>;
}

interface ItemProps {
  id: string;
  banner: ImageSourcePropType;
  title: string;
}

const Item: FC<ItemProps> = ({banner, title}) => (
  <ImageBackground
    source={banner}
    style={styles.imageBackground}
    resizeMode="cover">
    <Text fs44 fw7 marginL-20 style={styles.textTilte}>
      {title}
    </Text>
  </ImageBackground>
);

const Banner: FC<Props> = ({data}) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Carousel>
      {data.map((item: ItemProps) => (
        <View key={item.id}>
          <Item {...item} />
        </View>
      ))}
    </Carousel>
  );
};

const styles = StyleSheet.create({
  textTilte: {
    color: Colors.white,
    maxWidth: Metrics.screen.width / 2 - 20,
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
