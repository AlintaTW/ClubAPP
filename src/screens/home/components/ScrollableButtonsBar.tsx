import React, {FC, memo, useCallback} from 'react';
import {
  FlatList,
  StyleSheet,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '@src/assets';
import {APP_CONFIG} from '@src/config';
import i18n from '@src/localization';

interface Props {}

interface ItemProps {
  icon: ImageSourcePropType;
  name: string;
  detail?: string;
}

const Item: FC<ItemProps> = ({icon, name, detail}) => {
  const navigation = useNavigation();

  const onNavToDetail = useCallback(() => {
    if (detail) {
      navigation.navigate(detail);
    }
  }, [detail, navigation]);

  return (
    <TouchableOpacity
      style={styles.containerItem}
      activeOpacity={1}
      onPress={onNavToDetail}>
      <View br30 center style={styles.item}>
        <Image source={icon} />
      </View>
      <View flex center>
        <Text center fs14 color={Colors.orangeCarrot}>
          {i18n.t(`home.scrollable_buttons_bar.${name}`)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const renderKeyExtractor = (item: ItemProps, index: number) => index.toString();

const renderItem = ({item}: {item: ItemProps}) => <Item {...item} />;

const ScrollableButtonsBar = () => (
  <FlatList
    refreshing
    horizontal
    data={APP_CONFIG.scrollableButtons}
    keyExtractor={renderKeyExtractor}
    onEndReachedThreshold={0.2}
    renderItem={renderItem}
    showsHorizontalScrollIndicator={false}
    style={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  containerItem: {
    marginHorizontal: 10,
    height: 109,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: Colors.white,
    display: 'flex',
    height: 60,
    width: 60,
  },
});

export default memo<Props>(ScrollableButtonsBar);
