import React, {FC, memo} from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import {Avatar, Card, View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {Colors} from '@src/assets';
import Chart from './components/Chart';
import {Svgs} from '@src/assets';
import CapGuide from './components/CapGuide';
import {actuatedNormalize} from '@src/untils/viewScale';
import {Carousel} from '@src/screens/components';
import i18n from '@src/localization';
interface Props {
  data: any;
}

interface ItemProps {
  banner: ImageSourcePropType;
  title: string;
}

const Item: FC<ItemProps> = (item) => (
  <Card marginH-16 padding-20 marginT-10 enableShadow={false}>
    <View row>
      <View flex row>
        <Avatar size={70} source={item?.photoUrl} />
        <View marginH-15>
          <Text fs22 style={styles.textName} fw7>
            {item?.name}
          </Text>
          <Text fs10 fw4 style={styles.dateOfBirth}>
            {item.birthday}
          </Text>
        </View>
      </View>
      <View style={styles.capStatus}>
        <Text style={styles.statisticText}>
          {i18n.t('home.cap_chart.applied_this_month')}
          <Text color={Colors.orangeCarrot}>{item.capFinishedOfThisMonth}</Text>
          {i18n.t('home.cap_chart.times')}
        </Text>
        <Text style={styles.statisticText}>
          {i18n.t('home.cap_chart.remaining')}
          <Text color={Colors.orangeCarrot}>{item.capRest}</Text>
          {i18n.t('home.cap_chart.times')}
        </Text>
      </View>
    </View>
    <Chart item={item} />
  </Card>
);

const CapChart: FC<Props> = ({data}) => {
  const [isVisiable, setVisiable] = React.useState(false);

  const onDialog = React.useCallback(() => {
    setVisiable(!isVisiable);
  }, [isVisiable, setVisiable]);
  return (
    <View>
      <Carousel height={292} paginationStyle={styles.paginationStyle}>
        {data.map((el) => (
          <Item key={el.childNo} {...el} />
        ))}
      </Carousel>
      <TouchableOpacity
        row
        style={styles.capGuide}
        marginR-20
        onPress={onDialog}>
        <Text marginR-5 fw7 style={styles.textButton}>
          {i18n.t('home.cap_chart.cap_chart_no_space')}
        </Text>
        <Svgs.Help
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
        />
      </TouchableOpacity>
      <CapGuide isVisiable={isVisiable} onDialog={onDialog} />
    </View>
  );
};

const styles = StyleSheet.create({
  capStatus: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  capGuide: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -13,
  },
  dateOfBirth: {
    color: Colors.black,
    opacity: 0.38,
    lineHeight: 16,
  },
  paginationStyle: {
    bottom: 0,
  },
  textName: {
    //
  },
  imageBackground: {
    height: 230,
    justifyContent: 'center',
    display: 'flex',
    zIndex: 0,
  },
  statisticText: {
    fontSize: actuatedNormalize(14),
  },
  textButton: {
    color: Colors.black,
    fontSize: actuatedNormalize(14),
    opacity: 0.38,
    textAlign: 'right',
  },
});

export default memo<Props>(CapChart);
