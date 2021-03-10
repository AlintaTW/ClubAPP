import React, {FC, memo, useCallback, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {Container} from '@src/screens/components';
import {Colors} from '@src/assets';
import Banner from './components/Banner';
import ScrollableButtonsBar from './components/ScrollableButtonsBar';
import PointProgress from './components/PointProgress';
import VideoLayout from './components/VideoLayout';
import OnlineEvent from './components/OnlineEvent';
import UpComingEvent from './upcomingEvent';
import {headerDatas, capData, event} from '@src/untils/dummyData';
import CapChart from './capChart';

interface Props {}

const Home: FC<Props> = () => {
  const [isVideo, setVideo] = useState(false);

  const onVideo = useCallback(() => {
    setVideo(!isVideo);
  }, [isVideo]);

  return (
    <Container
      backgroundColor={Colors.orangeCarrot}
      barStyle="light-content"
      backgroundBody={Colors.yellowHalfDutchWhite}>
      <ScrollView style={styles.container}>
        {headerDatas.length > 0 && <Banner data={headerDatas} />}
        <ScrollableButtonsBar />
        <PointProgress
          points={capData.points}
          limitPoints={capData.limitPoints}
        />
        <CapChart data={capData.children} />
        <UpComingEvent data={event[0]} />
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
