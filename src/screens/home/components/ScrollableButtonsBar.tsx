import React, {FC, memo} from 'react';
import {
  FlatList,
  StyleSheet,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

import {Colors} from '@src/assets';
import {buttonsBarDatas} from '@src/untils/dummyData';

interface Props {}

interface ItemProps {
  id: string;
  icon: ImageSourcePropType;
  name: string;
}

const Item: FC<ItemProps> = ({icon, name}) => {
  return (
    <TouchableOpacity style={styles.containerItem} activeOpacity={1}>
      <View style={styles.item}>
        <Image source={icon} />
      </View>
      <View style={styles.space} />
      <Text style={styles.textName}>{name}</Text>
    </TouchableOpacity>
  );
};

const renderKeyExtractor = (item: ItemProps) => item.id;

const renderItem = ({item}: {item: ItemProps}) => <Item {...item} />;

const ScrollableButtonsBar = () => {
  return (
    <FlatList
      refreshing
      horizontal
      data={buttonsBarDatas}
      keyExtractor={renderKeyExtractor}
      onEndReachedThreshold={0.2}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  containerItem: {
    marginHorizontal: 10,
    height: 100,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 30,
    display: 'flex',
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  textName: {
    textAlign: 'center',
    color: Colors.orangeCarrot,
    fontSize: 12,
  },
  space: {
    flex: 1,
  },
});

export default memo<Props>(ScrollableButtonsBar);
