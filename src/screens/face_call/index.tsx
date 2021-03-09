import React, {FC, memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

import {Colors, Metrics} from '@src/assets';
import {Container} from '@src/screens/components';

interface Props {
  navigation: any;
}

const FaceCall: FC<Props> = ({navigation}) => {
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container
      backgroundColor={Colors.orangeTacao}
      backgroundBody={Colors.orangeTacao}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onGoBack}>
          <Text style={styles.textButton}>{'Go Back'}</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: Metrics.screen.width - 60,
    borderRadius: 10,
    backgroundColor: Colors.orangeCarrot,
    justifyContent: 'center',
  },
  textButton: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default memo<Props>(FaceCall);
