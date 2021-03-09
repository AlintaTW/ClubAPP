import React, {FC} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Dialog, Text, View} from 'react-native-ui-lib';

import {Colors, Images} from '@src/assets';

interface Props {
  isVisiable: boolean;
  onDialog: () => void;
}
const NoRegister: FC<Props> = ({isVisiable, onDialog}) => (
  <Dialog
    visible={isVisiable}
    height={Dimensions.get('screen').height}
    overlayBackgroundColor={Colors.brownKabul50}>
    <Card height={288} style={styles.container}>
      <Card.Section
        imageSource={Images.common.errorLayout}
        imageStyle={styles.layoutImage}
      />
      <View style={styles.content} br40 padding-35>
        <View height={210} centerH>
          <Text style={styles.title} marginB-20 marginT-10>
            活動電子票尚未提供
          </Text>
          <Text style={styles.textContent}>
            已經報名的活動，由於活動票務建立作業時間，將於活動到來的七天前起，經由系統提供給會員查閱！謝謝！
          </Text>
          <Button
            label="我知道了"
            backgroundColor={Colors.readAlizarin}
            style={styles.button}
            onPress={onDialog}
          />
        </View>
      </View>
    </Card>
  </Dialog>
);

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
    minWidth: 176,
    bottom: 0,
    position: 'absolute',
  },
});

export default NoRegister;
