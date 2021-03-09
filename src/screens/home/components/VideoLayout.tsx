import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, Modal, SafeAreaView, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, View} from 'react-native-ui-lib';

import {Colors, Metrics} from '@src/assets';
import {onlineEvent} from '@src/untils/dummyData';

interface Props {
  isVisiable: boolean;
  onDisplay: () => void;
}
const VideoLayout = ({isVisiable, onDisplay}: Props) => {
  const [islandscape, setLandscape] = useState(false);
  const [isPaused, setPaused] = useState(false);

  const changeOrientation = useCallback(() => {
    const width = Metrics.screen.width;
    const height = Metrics.screen.height;
    width > height ? setLandscape(true) : setLandscape(false);
  }, [setLandscape]);

  const onPaused = useCallback(() => {
    setPaused(true);
  }, [setPaused]);

  const onLoadStart = useCallback(() => {
    setPaused(false);
    changeOrientation();
  }, [changeOrientation]);

  useEffect(() => {
    Dimensions.addEventListener('change', changeOrientation);
    return () => Dimensions.removeEventListener('change', changeOrientation);
  }, [changeOrientation]);

  return (
    <Modal
      visible={isVisiable}
      supportedOrientations={['portrait', 'landscape']}
      style={{backgroundColor: Colors.black}}>
      <SafeAreaView style={styles.buttonClose}>
        <Button link onPress={onDisplay}>
          <Ionicons name="close-circle-outline" style={styles.iconClose} />
        </Button>
      </SafeAreaView>
      <View center flex backgroundColor={Colors.black}>
        <Video
          source={{uri: onlineEvent[0].videoUrl}}
          style={[
            styles.videoStyle,
            islandscape ? styles.videoStyleLandscape : {},
          ]}
          controls
          paused={isPaused}
          onEnd={onPaused}
          onLoadStart={onLoadStart}
          resizeMode="stretch"
        />
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
    width: '90%',
    height: Metrics.screen.height - 60,
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
