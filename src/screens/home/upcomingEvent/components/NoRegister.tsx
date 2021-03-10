import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Button, Card, Dialog, Text, View} from 'react-native-ui-lib';

import {Colors, Images, Metrics} from '@src/assets';
import i18n from '@src/localization';

interface Props {
  isVisiable: boolean;
  onDialog: () => void;
}
const NoRegister: FC<Props> = ({isVisiable, onDialog}) => (
  <Dialog
    visible={isVisiable}
    height={Dimensions.get('screen').height}
    overlayBackgroundColor={Colors.brownKabul50}
    supportedOrientations={['portrait', 'landscape']}>
    <Card style={styles.container}>
      <Image
        source={Images.common.errorLayout}
        style={styles.layoutImage}
        resizeMode="contain"
      />

      <View br40 padding-35 center>
        <View style={styles.content}>
          <Text fs20 bold marginB-20 marginT-10>
            {i18n.t('home.yet_provided')}
          </Text>
          <Text style={styles.textContent} fs14>
            {i18n.t('home.notice_provided')}
          </Text>
        </View>
        <Button
          label={i18n.t('home.know')}
          backgroundColor={Colors.readAlizarin}
          style={styles.button}
          onPress={onDialog}
          fs14
          marginT-20
        />
      </View>
    </Card>
  </Dialog>
);

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.screen.height / 3,
    minHeight: 288,
  },
  layoutImage: {
    opacity: 0.3,
    position: 'absolute',
    height: 230,
    width: 170,
  },
  content: {
    minHeight: 210,
  },
  textContent: {
    lineHeight: 20,
    letterSpacing: 0.7,
    textAlign: 'justify',
  },
  button: {
    width: 184,
    minHeight: 40,
  },
});

export default NoRegister;
