import React, {memo} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {Container} from '@src/screens/components';
import {Colors} from '@src/assets';
import Carousel from './components/Carousel';
import ScrollableButtonsBar from './components/ScrollableButtonsBar';
import PointProgress from './components/PointProgress';
import {headerDats, capData} from '@src/untils/dummyData';

interface Props {}

const Home = () => {
  return (
    <Container
      backgroundColor={Colors.orangeCarrot}
      barStyle="light-content"
      backgroundBody={Colors.yellowHalfDutchWhite}>
      <ScrollView style={styles.container}>
        <Carousel data={headerDats} />
        <ScrollableButtonsBar />
        <PointProgress
          points={capData.points}
          limitPoints={capData.limitPoints}
        />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo<Props>(Home);
