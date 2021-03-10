import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Button, Card, Dialog, Text, View} from 'react-native-ui-lib';

import {Colors, Images} from '@src/assets';
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
    <View flex center>
      <Card style={styles.container}>
        <Image
          source={Images.common.errorLayout}
          style={styles.layoutImage}
          resizeMode="contain"
        />

        <View br40 padding-35 center>
          <View style={styles.content}>
            <Text fs20 bold marginB-20 marginT-10>
              {i18n.t('home.upcoming_event.yet_provided')}
            </Text>
            <Text style={styles.textContent} fs14>
              {i18n.t('home.upcoming_event.notice_provided')}
            </Text>
          </View>
          <Button
            label={i18n.t('home.upcoming_event.know')}
            backgroundColor={Colors.readAlizarin}
            style={styles.button}
            onPress={onDialog}
            fs14
            marginT-10
          />
        </View>
      </Card>
    </View>
  </Dialog>
);

const styles = StyleSheet.create({
  container: {
    minHeight: 288,
  },
  layoutImage: {
    opacity: 0.3,
    position: 'absolute',
    height: 230,
    width: 170,
  },
  content: {
    minHeight: 200,
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
