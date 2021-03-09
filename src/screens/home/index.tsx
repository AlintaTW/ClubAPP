import React, {FC, memo, useCallback, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {Container} from '@src/screens/components';
import {Colors} from '@src/assets';
import Carousel from './components/Carousel';
import ScrollableButtonsBar from './components/ScrollableButtonsBar';
import PointProgress from './components/PointProgress';
import UpComingEvent from './components/UpComingEvent';
import NoRegister from './components/NoRegister';
import VideoLayout from './components/VideoLayout';
import OnlineEvent from './components/OnlineEvent';
import {event, headerDatas, capData} from '@src/untils/dummyData';

interface Props {}

const Home: FC<Props> = () => {
  const [isVisiable, setVisiable] = useState(false);
  const [isVideo, setVideo] = useState(false);

  const onDialog = useCallback(() => {
    setVisiable(!isVisiable);
  }, [isVisiable]);

  const onVideo = useCallback(() => {
    setVideo(!isVideo);
  }, [isVideo]);

  return (
    <Container
      backgroundColor={Colors.orangeCarrot}
      barStyle="light-content"
      backgroundBody={Colors.yellowHalfDutchWhite}>
      <ScrollView style={styles.container}>
        <Carousel data={headerDatas} />
        <ScrollableButtonsBar />
        <PointProgress
          points={capData.points}
          limitPoints={capData.limitPoints}
        />
        <UpComingEvent item={event[0]} onDialog={onDialog} />
        <NoRegister isVisiable={isVisiable} onDialog={onDialog} />
        <OnlineEvent onDisplay={onVideo} />
        <VideoLayout isVisiable={isVideo} onDisplay={onVideo} />
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
