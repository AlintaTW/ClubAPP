import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

import {Container} from '@src/screens/components';
import {Colors} from '@src/assets';
import Carousel from './components/Carousel';
import {headerDats} from '@src/untils/dummyData';

interface Props {}

const Home = () => {
  return (
    <Container
      backgroundColor={Colors.orangeCarrot}
      barStyle="light-content"
      backgroundBody={Colors.yellowHalfDutchWhite}>
      <View style={styles.container}>
        <Carousel data={headerDats} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo<Props>(Home);
