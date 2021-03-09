import React, {FC, memo} from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import {Avatar, Card, Carousel, View, Text} from 'react-native-ui-lib';
import {Colors, Metrics} from '@src/assets';
import Chart from './components/Chart';

interface Props {
  data: any;
}

interface ItemProps {
  banner: ImageSourcePropType;
  title: string;
}

const Item: FC<ItemProps> = (item) => (
  <Card marginH-20 padding-20 marginV-10 enableShadow={false}>
    <View row>
      <View flex row>
        <Avatar size={70} source={item?.photoUrl} />
        <View marginH-15>
          <Text style={styles.textName} fw7>
            {item?.name}
          </Text>
          <Text fw4 style={styles.dateOfBirth}>
            {item.birthday}
          </Text>
        </View>
      </View>
      <View style={styles.capStatus}>
        <Text style={styles.statisticText}>
          {'本月已申請 '}
          <Text color={Colors.orangeCarrot}>{item.capFinishedOfThisMonth}</Text>
          {' 次'}
        </Text>
        <Text style={styles.statisticText}>
          {'剩餘 '}
          <Text color={Colors.orangeCarrot}>{item.capRest}</Text>
          {' 次'}
        </Text>
      </View>
    </View>
    <Chart item={item} />
  </Card>
);

const TopCarousel: FC<Props> = ({data}) => {
  return (
    <Carousel
      // autoplay
      // loop
      pageControlProps={{
        size: 10,
        inactiveColor: Colors.white,
        color: Colors.orangeCarrot,
        containerStyle: styles.containerStyle,
      }}
      pageControlPosition={Carousel.pageControlPositions.OVER}>
      {data.map((el) => (
        <Item key={el.childNo} {...el} />
      ))}
    </Carousel>
  );
};

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
  capStatus: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  dateOfBirth: {
    fontSize: 10,
    color: Colors.black,
    opacity: 0.38,
  },
  textName: {
    fontSize: 22,
  },
  imageBackground: {
    height: 230,
    justifyContent: 'center',
    display: 'flex',
    zIndex: 0,
  },
  statisticText: {
    fontSize: 14,
  },
});

export default memo<Props>(TopCarousel);
