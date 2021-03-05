import React, {FC} from 'react';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {Button, Card, Dialog, Text, View} from 'react-native-ui-lib';

import {Colors} from '@src/assets';
import {images} from '@src/assets/Images';

interface Props {
  isVisiable: boolean;
  onDialog: () => void;
}
const NoRegister: FC<Props> = ({isVisiable, onDialog}) => {
  return (
    <Dialog
      visible={isVisiable}
      height={Dimensions.get('screen').height}
      overlayBackgroundColor={Colors.kabulOpacity}>
      <StatusBar backgroundColor={Colors.orangeCarrotOpacity} />
      <Card height={288} style={styles.container}>
        <Card.Section
          imageSource={images.common.errorLayout}
          imageStyle={styles.layoutImage}
        />
        <View style={styles.content} br40 padding-35>
          <View height={210}>
            <Text style={styles.title} marginB-20 marginT-10>
              活動電子票尚未提供
            </Text>
            <Text style={styles.textContent}>
              已經報名的活動，由於活動票務建立作業時間，將於活動到來的七天前起，經由系統提供給會員查閱！謝謝！
            </Text>
            <Button
              label="我知道了"
              backgroundColor={Colors.alizarin}
              style={styles.button}
              onPress={onDialog}
            />
          </View>
        </View>
      </Card>
    </Dialog>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('screen').height / 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  layoutImage: {
    opacity: 0.3,
  },
  content: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  textContent: {
    lineHeight: 20,
    letterSpacing: 0.7,
    textAlign: 'justify',
  },
  button: {
    width: 176,
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
});
export default NoRegister;
