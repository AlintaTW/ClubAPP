import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, View} from 'react-native-ui-lib';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

import {Colors} from '@src/assets';
import {onlineEvent} from '@src/untils/dummyData';

interface Props {
  isVisiable: boolean;
  onDisplay: () => void;
}
const VideoLayout = ({isVisiable, onDisplay}: Props) => {
  const videoPlayer = useRef<any>(null);
  const [islandscape, setLandscape] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setTime] = useState(0);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [isLoading, setLoading] = useState(true);

  const changeOrientation = useCallback(() => {
    const width = Dimensions.get('screen').width;
    const height = Dimensions.get('screen').height;
    width > height ? setLandscape(true) : setLandscape(false);
  }, []);

  useEffect(() => {
    Dimensions.addEventListener('change', changeOrientation);
    return () => Dimensions.removeEventListener('change', changeOrientation);
  }, [changeOrientation]);

  const onLoad = useCallback((data) => {
    setDuration(data.duration);
    setLoading(false);
  }, []);
  const onSeek = useCallback((seek) => {
    videoPlayer?.current.seek(seek);
  }, []);
  const onSeeking = useCallback((time) => {
    setTime(time);
  }, []);
  const onPaused = useCallback(
    (state) => {
      setPaused(!isPaused);
      setPlayerState(state);
    },
    [isPaused],
  );
  const onReplay = useCallback(() => {
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer?.current.seek(0);
    setTime(0);
    setPaused(false);
  }, []);
  const onLoadStart = useCallback(() => {
    setLoading(true);
  }, []);

  const onProgress = useCallback(
    (data) => {
      if (!isLoading || playerState !== PLAYER_STATES.ENDED) {
        setTime(data.currentTime);
      }
    },
    [isLoading, playerState],
  );

  const onEnd = useCallback(() => {
    setPaused(true);
    setPlayerState(PLAYER_STATES.ENDED);
    setTime(duration);
  }, [duration]);

  return (
    <Modal
      visible={isVisiable}
      supportedOrientations={['portrait', 'landscape']}
      style={{backgroundColor: Colors.black}}>
      <SafeAreaView style={styles.buttonClose}>
        <Button link onPress={onDisplay}>
          <Ionicons name="close-circle" style={styles.iconClose} />
        </Button>
      </SafeAreaView>
      <View center flex backgroundColor={Colors.black}>
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={isPaused}
          ref={(ref) => (videoPlayer.current = ref)}
          resizeMode={'stretch'}
          source={{uri: onlineEvent[0].videoUrl}}
          style={[
            styles.videoStyle,
            islandscape ? styles.videoStyleLandscape : {},
          ]}
          controls
        />
        {Platform.OS === 'ios' && isLoading && (
          <ActivityIndicator color={Colors.white} />
        )}
        {Platform.OS === 'android' && (
          <MediaControls
            isFullScreen={false}
            duration={duration}
            isLoading={isLoading}
            progress={currentTime}
            onPaused={onPaused}
            onReplay={onReplay}
            onSeek={onSeek}
            onSeeking={onSeeking}
            mainColor={Colors.orangeCarrot}
            playerState={playerState}
            sliderStyle={{
              containerStyle: {},
              thumbStyle: {},
              trackStyle: {},
            }}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  videoStyle: {
    marginTop: 50,
    width: '100%',
    height: 300,
  },
  videoStyleLandscape: {
    ...Platform.select({android: {height: '100%'}, ios: {height: '90%'}}),
    width: '90%',
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 500,
  },
  iconClose: {
    color: Colors.orangeCarrot,
    fontSize: 36,
  },
});

export default VideoLayout;
