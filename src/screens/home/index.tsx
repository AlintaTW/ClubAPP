import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {Container} from '@src/screens/components';
import {Colors} from '@src/assets';
import Carousel from './components/Carousel';
import ScrollableButtonsBar from './components/ScrollableButtonsBar';
import {event, headerDats} from '@src/untils/dummyData';
import UpComingEvent from './components/UpComingEvent';
import NoRegister from './components/NoRegister';

interface Props {}

const Home = () => {
  const [isVisiable, setVisiable] = useState(false);
  const onDialog = useCallback(() => {
    setVisiable(!isVisiable);
  }, [isVisiable]);
  return (
    <Container
      backgroundColor={Colors.orangeCarrot}
      barStyle="light-content"
      backgroundBody={Colors.yellowHalfDutchWhite}>
      <ScrollView style={styles.container}>
        <Carousel data={headerDats} />
        <ScrollableButtonsBar />
        <UpComingEvent item={event[0]} onDialog={onDialog} />
        <NoRegister isVisiable={isVisiable} onDialog={onDialog} />
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
