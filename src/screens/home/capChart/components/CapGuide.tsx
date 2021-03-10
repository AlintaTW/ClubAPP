import React, {FC} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Dialog, Text, View} from 'react-native-ui-lib';
import Chart from './Chart';
import {capDataForHelp} from '@src/untils/dummyData';
import {actuatedNormalize} from '@src/untils/viewScale';
import {Colors, Metrics, Svgs} from '@src/assets';
import i18n from '@src/localization';

const marginLeft = Metrics.screen.width > 375 ? 29 : 15;
interface Props {
  isVisiable: boolean;
  onDialog: () => void;
}

type FlexDirection = 'column' | 'column-reverse';
interface SizeProps {
  height?: number;
  width?: number;
  style?: any;
  direction?: FlexDirection;
}
interface DetailProps {
  detail: string;
  style?: any;
}

const GuideLine: FC<SizeProps> = ({direction, width, height, ...style}) => {
  const size = {
    width,
    height,
    flexDirection: direction,
  };

  return (
    <View
      paddingT-2
      paddingB-2
      style={[styles.guideLineWrapper, size]}
      {...style}>
      <View style={styles.horizontalLine} />
      <View style={styles.verticalLine} />
    </View>
  );
};

const Detail: FC<DetailProps> = ({detail, style}) => {
  return (
    <View paddingH-10 style={[styles.guideDetail, style]}>
      <Text>{detail}</Text>
    </View>
  );
};

const CapGuide: FC<Props> = ({isVisiable, onDialog}) => (
  <Dialog
    visible={isVisiable}
    height={Dimensions.get('screen').height}
    overlayBackgroundColor={Colors.brownKabul50}>
    <View flex center>
      <Card style={styles.container} padding-20 centerH>
        <View flex>
          <Text fs28 fw7 style={styles.title} marginB-20 marginT-10>
            {i18n.t('home.cap_chart.cap_chart')}
          </Text>
          <View style={styles.topGuideContainer}>
            <View style={styles.topGuideWrapper}>
              <View marginR-10 style={styles.detailWithCap}>
                <Svgs.Cap width={40} height={40} fill={Colors.greenDark10} />
                <Detail detail={i18n.t('home.cap_chart.cap_not_reached')} />
              </View>
              <View style={styles.detailWithCap}>
                <Svgs.Cap width={40} height={40} fill={Colors.greenDark} />
                <Detail detail={i18n.t('home.cap_chart.cap_reached')} />
              </View>
            </View>
            <GuideLine direction={'column-reverse'} width={40} height={40} />
          </View>
          <View marginT-75 style={styles.chartWrapper}>
            <Chart item={capDataForHelp} />
          </View>
          <View flex style={styles.underlinedWrapper}>
            <GuideLine marginR-5 width={15} height={70} />
            <GuideLine width={15} height={25} />
            <Detail
              detail={i18n.t('home.cap_chart.total_cap_jobs')}
              style={styles.detailOne}
            />
            <Detail
              detail={i18n.t('home.cap_chart.total_completed_cap_jobs')}
              style={styles.detailTwo}
            />
          </View>
        </View>
        <Button
          label={i18n.t('home.cap_chart.understood')}
          backgroundColor={Colors.readAlizarin}
          style={styles.button}
          onPress={onDialog}
        />
      </Card>
    </View>
  </Dialog>
);

const styles = StyleSheet.create({
  container: {
    minHeight: 500,
  },
  chartWrapper: {
    //
  },
  title: {
    // fontSize: 28,
  },
  layoutImage: {
    opacity: 0.3,
  },
  textContent: {
    lineHeight: 20,
    letterSpacing: 0.7,
    textAlign: 'justify',
  },
  button: {
    width: 184,
    height: 40,
  },
  underlinedWrapper: {
    flexDirection: 'row',
    paddingLeft: actuatedNormalize(9),
  },
  topGuideContainer: {
    position: 'absolute',
    top: actuatedNormalize(50),
    left: actuatedNormalize(marginLeft),
    zIndex: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topGuideWrapper: {
    flexDirection: 'row',
  },
  guideLineWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 10,
  },
  horizontalLine: {
    width: '100%',
    height: 3,
    backgroundColor: Colors.yellowHalfDutchWhite,
  },
  verticalLine: {
    height: '100%',
    width: 2,
    backgroundColor: Colors.yellowHalfDutchWhite,
  },
  guideDetail: {
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: Colors.yellowHalfDutchWhite,
    height: 28,
  },
  detailOne: {
    position: 'absolute',
    left: 20,
    top: 25,
  },
  detailTwo: {
    position: 'absolute',
    left: 0,
    top: 65,
  },
  detailWithCap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CapGuide;
