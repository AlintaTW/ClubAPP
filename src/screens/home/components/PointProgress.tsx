import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors, Icons, Metrics} from '@src/assets';
import i18n from '@src/localization';
import {CardDefault} from '@src/screens/components';

interface Props {
  points: number;
  limitPoints: number;
}

const PointProgress: FC<Props> = ({points, limitPoints}) => {
  // check and show valueStart and title on view
  const isPoint0 = useMemo(() => points === 0, [points]);

  // valueStart 0: when limitPoints === 100; any: when limitPoints > 100
  const valueStart = useMemo(() => {
    if (limitPoints >= points) {
      return limitPoints - 100 > 0 ? limitPoints - 100 : 0;
    }
    return 0;
  }, [limitPoints, points]);

  // convert value to show on Progress
  const valueProgress = useMemo(() => {
    if (points === 0 || limitPoints - 100 > points) {
      return 5;
    }
    if (limitPoints < 100 && limitPoints > points) {
      const surplus = points % limitPoints;
      const value = ((Metrics.screen.width - 195) / limitPoints) * surplus;
      return value >= 5 ? value : 5;
    }
    if (points < limitPoints) {
      const surplus = points % 100;
      const value = ((Metrics.screen.width - 195) / 100) * surplus;
      return value >= 5 ? value : 5;
    }
    return Metrics.screen.width - 190;
  }, [points, limitPoints]);

  const accumulateMoreValue = useMemo(() => {
    if (points === 0) {
      return null;
    }
    if (limitPoints <= points) {
      return 0;
    }
    return limitPoints - points;
  }, [limitPoints, points]);

  // Reached points limitPoints >= points
  const isReachedPoints = useMemo(() => limitPoints <= points, [
    limitPoints,
    points,
  ]);

  return (
    <CardDefault marginV-0 marginT-40>
      <View centerH style={styles.container}>
        <ImageBackground source={Icons.home.star} style={styles.point}>
          <Text center fs40 style={styles.textPointNumber}>
            {points}
          </Text>
          <Text center fs14 color={Colors.black} style={styles.textPoint}>
            {i18n.t('home.point')}
          </Text>
        </ImageBackground>
        <View centerV marginR-25 style={styles.containerProgress}>
          <View
            style={[
              styles.containerTitle,
              isPoint0 ? {} : styles.containerTitleRight,
            ]}>
            <View
              br10
              paddingH-10
              paddingV-5
              style={[
                styles.titleView,
                isReachedPoints ? {backgroundColor: Colors.readAlizarin} : {},
              ]}>
              <Text fs10 style={styles.title}>
                {accumulateMoreValue
                  ? accumulateMoreValue === 0
                    ? i18n.t('home.reached_points')
                    : i18n.t('home.accumulate_more', {
                        value: accumulateMoreValue,
                      })
                  : i18n.t('home.accumulation')}
              </Text>
            </View>
          </View>
          <Ionicons
            name="triangle"
            style={[
              isPoint0 ? styles.start : styles.end,
              isReachedPoints ? {color: Colors.readAlizarin} : {},
            ]}
          />
          <View style={[styles.progressBar, styles.progressView]}>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={[Colors.whiteGainsboro, Colors.whiteSmoke]}
                style={styles.progressBar}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}>
                <LinearGradient
                  colors={[Colors.orangeTacao, Colors.orangeCarrot]}
                  style={[styles.progressBarLine, {width: valueProgress}]}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                />
              </LinearGradient>
            </View>
            <MaterialIcons name="star" style={styles.icon} />
          </View>
          <View style={styles.containerDot}>
            <View
              style={
                valueStart === 0 ? styles.dotViewStart0 : styles.dotViewStart
              }>
              <View style={styles.dot} />
              <Text fs12 fw7 style={[styles.textValue, styles.textStart]}>
                {valueStart}
              </Text>
            </View>
            <View style={styles.dotViewEnd}>
              <View style={styles.dotEnd} />
              <Text fs12 fw7 style={[styles.textValue, styles.textEnd]}>
                {limitPoints}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </CardDefault>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    height: 95,
    overflow: 'hidden',
  },
  containerTitle: {
    alignItems: 'baseline',
  },
  containerTitleRight: {
    alignSelf: 'flex-end',
  },
  titleView: {
    backgroundColor: Colors.orangeCarrot,
    marginLeft: -15,
    marginRight: -10,
    marginBottom: -2,
  },
  point: {
    height: 85,
    width: 85,
    marginHorizontal: 20,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  textPoint: {
    opacity: 0.38,
    paddingBottom: 7,
  },
  textPointNumber: {
    color: Colors.orangeCarrot,
    fontWeight: '700',
    marginBottom: 5,
  },
  containerProgress: {
    display: 'flex',
    height: 95,
    maxWidth: Metrics.screen.width - 180,
  },
  start: {
    transform: [{rotate: '180deg'}],
    color: Colors.orangeCarrot,
    fontSize: 8,
    marginRight: Metrics.screen.width - 185,
    marginLeft: -5,
  },
  end: {
    transform: [{rotate: '180deg'}],
    color: Colors.orangeCarrot,
    fontSize: 8,
    marginRight: 6.5,
  },
  progressBar: {
    height: 5,
    width: Metrics.screen.width - 180,
    zIndex: 0,
  },
  progressView: {
    height: 28,
    display: 'flex',
    justifyContent: 'center',
  },
  progressBarLine: {
    height: 5,
  },
  icon: {
    color: Colors.yellowGoldenGlow,
    fontSize: 30,
    opacity: 0.5,
    position: 'absolute',
    right: -4.5,
    zIndex: 1,
  },
  textValue: {
    color: Colors.black,
  },
  textStart: {
    opacity: 0.38,
  },
  textEnd: {
    color: Colors.orangeCarrot,
  },
  containerDot: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxWidth: Metrics.screen.width - 180,
  },
  dot: {
    height: 5,
    width: 1,
    backgroundColor: Colors.black,
    marginTop: -12.5,
    marginBottom: 10,
    opacity: 0.38,
  },
  dotEnd: {
    height: 5,
    width: 1,
    backgroundColor: Colors.orangeCarrot,
    marginTop: -12.5,
    marginBottom: 10,
  },
  dotViewEnd: {
    width: 50,
    display: 'flex',
    alignItems: 'center',
    marginRight: -14.5,
  },
  dotViewStart0: {
    marginLeft: -24,
    display: 'flex',
    alignItems: 'center',
    width: 50,
  },
  dotViewStart: {
    marginLeft: -9,
    display: 'flex',
    alignItems: 'center',
    width: 50,
  },
  title: {
    color: Colors.white,
  },
});

export default memo<Props>(PointProgress);
