import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '@src/assets';
import {Metrics, Svgs} from '@src/assets';
import {actuatedNormalize} from '@src/untils/viewScale';
import i18n from '@src/localization';

interface Props {
  activeColor?: string;
  icon?: React.ReactNode;
  label: string;
  percent?: number;
  subItemFInished?: string;
  style?: StyleProp<ViewStyle>;
}

interface CapItem {
  itemFinishedByPercent: number;
  subItemFInished: string;
  totalItem: number;
  totallSubItem: number;
  finished: boolean;
}

interface Chart {
  //
}
const width = (Metrics.screen.width - 84) / 6;
const chartWidth = width; // width of chart
const diffHeight = 7; // the difference hight between 2 consecutive charts
const chartHight = 64; // height of the highest chart
const chart5h = chartHight - diffHeight;
const chart4h = chart5h - diffHeight;
const chart3h = chart4h - diffHeight;
const chart2h = chart3h - diffHeight;
const chart1h = chart2h - diffHeight;

const Chart: React.FC<Props> = ({
  icon,
  label,
  subItemFInished,
  style,
  activeColor,
  percent,
}) => {
  const activeStyle = {
    backgroundColor: activeColor,
    color: activeColor,
    height: `${percent || 0}%`,
  };
  const activeText = {color: activeColor};

  return (
    <View style={styles.chartContainer}>
      <View center marginB-7>
        {icon}
      </View>
      <View style={[styles.chart, style]}>
        <View style={styles.triangle} />
        <View style={[styles.actual, activeStyle]} />
      </View>
      <Text numberOfLines={1} marginT-5 style={[styles.chartLabel, activeText]}>
        {label}
      </Text>
      <Text
        numberOfLines={1}
        fw7
        marginT-5
        style={[styles.chartInfo, activeText]}>
        {subItemFInished || ''}
      </Text>
    </View>
  );
};

const CapChart: React.FC<Chart> = ({item}) => {
  const style6 = {
    borderBottomColor: Colors.orangeSafety,
  };
  const style5 = {
    height: chart5h,
    backgroundColor: Colors.orangeSunglow10,
    borderBottomColor: Colors.orangeSunglow,
  };
  const style4 = {
    height: chart4h,
    backgroundColor: Colors.greenPine10,
    borderBottomColor: Colors.greenPine,
  };
  const style3 = {
    height: chart3h,
    backgroundColor: Colors.greenDark10,
    borderBottomColor: Colors.greenDark,
  };
  const style2 = {
    height: chart2h,
    backgroundColor: Colors.blueDark10,
    borderBottomColor: Colors.blueDark,
  };
  const style1 = {
    height: chart1h,
    backgroundColor: Colors.blueSapphire10,
    borderBottomColor: Colors.blueSapphire,
  };

  return (
    <View style={styles.container}>
      <Chart
        activeColor={Colors.blueSapphire}
        icon={
          <Svgs.Cap
            width={40}
            height={40}
            fill={
              item?.c01[0]?.finished
                ? Colors.blueSapphire
                : Colors.blueSapphire10
            }
          />
        }
        label={i18n.t('home.cap_chart.blue')}
        percent={item?.c01[0]?.itemFinishedByPercent}
        style={style1}
        subItemFInished={item?.c01[0]?.subItemFInished}
      />
      <Chart
        activeColor={Colors.blueDark}
        icon={
          <Svgs.Cap
            width={40}
            height={40}
            fill={item?.c02[0]?.finished ? Colors.blueDark : Colors.blueDark10}
          />
        }
        label={i18n.t('home.cap_chart.dark_blue')}
        percent={item?.c02[0]?.itemFinishedByPercent}
        style={style2}
        subItemFInished={item?.c02[0]?.subItemFInished}
      />
      <Chart
        activeColor={Colors.greenDark}
        icon={
          <Svgs.Cap
            width={40}
            height={40}
            fill={
              item?.c03[0]?.finished ? Colors.greenDark : Colors.greenDark10
            }
          />
        }
        label={i18n.t('home.cap_chart.green')}
        percent={item?.c03[0]?.itemFinishedByPercent}
        style={style3}
        subItemFInished={item?.c03[0]?.subItemFInished}
      />
      <Chart
        activeColor={Colors.greenPine}
        icon={
          <Svgs.Cap
            width={40}
            height={40}
            fill={
              item?.c04[0]?.finished ? Colors.greenPine : Colors.greenPine10
            }
          />
        }
        label={i18n.t('home.cap_chart.light_green')}
        percent={item?.c04[0]?.itemFinishedByPercent}
        style={style4}
        subItemFInished={item?.c04[0]?.subItemFInished}
      />
      <Chart
        activeColor={Colors.orangeSunglow}
        icon={
          <Svgs.Cap
            width={40}
            height={40}
            fill={
              item?.c05[0]?.finished
                ? Colors.orangeSunglow
                : Colors.orangeSunglow10
            }
          />
        }
        label={i18n.t('home.cap_chart.yellow')}
        percent={item?.c05[0]?.itemFinishedByPercent}
        style={style5}
        subItemFInished={item?.c05[0]?.subItemFInished}
      />
      <Chart
        activeColor={Colors.orangeSafety}
        icon={
          <Svgs.GraduationCap
            width={40}
            height={40}
            fill={
              item?.dwe[0]?.finished
                ? Colors.orangeSafety
                : Colors.orangeSafety10
            }
          />
        }
        label={i18n.t('home.cap_chart.graduation')}
        percent={item?.dwe[0]?.itemFinishedByPercent}
        style={style6}
        subItemFInished={item?.dwe[0]?.subItemFInished}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actual: {
    width: width,
    backgroundColor: Colors.transparent,
  },
  container: {
    minHeight: 150,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  chart: {
    borderBottomWidth: 2,
    backgroundColor: Colors.orangeSafety10,
    flexDirection: 'column',
    height: chartHight,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  chartContainer: {
    marginHorizontal: 1,
    width: chartWidth,
  },
  chartInfo: {
    fontSize: actuatedNormalize(14),
    textAlign: 'center',
  },
  iconCap: {
    alignSelf: 'center',
  },
  chartLabel: {
    fontSize: actuatedNormalize(14),
    textAlign: 'center',
  },
  triangle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 0,
    height: 0,
    backgroundColor: Colors.transparent,
    borderStyle: 'solid',
    borderLeftWidth: chartWidth,
    borderRightWidth: 0,
    borderBottomWidth: diffHeight,
    borderLeftColor: Colors.white,
    borderBottomColor: Colors.transparent,
    borderTopColor: Colors.white,
    zIndex: 99,
  },
});

export default CapChart;
