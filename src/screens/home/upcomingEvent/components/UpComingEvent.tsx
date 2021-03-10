import React, {FC, memo} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib';

import {Colors, Images} from '@src/assets';
import {CardDefault} from '@src/screens/components';
import i18n from '@src/localization';

interface Props {
  item: any;
  onDialog: () => void;
}

const UpComingEvent: FC<Props> = ({item, onDialog}) => {
  const renderImage = () => (
    <View br20 style={styles.view} center>
      {item && item.image ? (
        <Image source={item.image} style={styles.imageEvent} />
      ) : (
        <Image source={Images.common.eventDefault} style={styles.imageEmpty} />
      )}
    </View>
  );

  const renderEvent = () => (
    <View style={styles.content} marginH-10 flex-6>
      {item ? (
        <>
          <Text
            color={Colors.greyNightRider}
            style={[styles.space, styles.bold]}
            fs14>
            {item.name}
          </Text>
          <Text color={Colors.orangeCarrot} style={styles.space} fs14>
            {item.time}
          </Text>
          <View row centerV>
            <Text color={Colors.greyNightRider} style={styles.space} fs14>
              {`大人 ${item.aduslts} 位 `}
            </Text>
            <View br10 backgroundColor={Colors.black} height={5} width={5} />
            <Text color={Colors.greyNightRider} style={styles.space} fs14>
              {` 小孩 ${item.children} 位`}
            </Text>
          </View>
        </>
      ) : (
        <Text color={Colors.greyNightRider}>
          {i18n.t('home.upcoming_event.no_events')}
        </Text>
      )}
    </View>
  );

  return (
    <CardDefault title={i18n.t('home.upcoming_event.title')}>
      <View row br40 marginV-25 marginH-20 centerV spread>
        {renderImage()}
        {renderEvent()}
        <Button
          size={Button.sizes.small}
          label={
            item
              ? i18n.t('home.upcoming_event.ticket')
              : i18n.t('home.upcoming_event.signup')
          }
          backgroundColor={Colors.readAlizarin}
          fs14
          onPress={onDialog}
          style={styles.button}
        />
      </View>
      <Image
        source={Images.common.arrowLeft}
        style={[styles.imageLeft, styles.imageStyle]}
      />
      <Image
        source={Images.common.arrowRight}
        style={[styles.imageRight, styles.imageStyle]}
      />
    </CardDefault>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.whiteSmoke,
    width: 72,
    height: 72,
  },
  content: {
    maxWidth: 167,
    alignSelf: 'flex-start',
  },
  imageEmpty: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  imageEvent: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageStyle: {
    position: 'absolute',
    height: 24,
    width: 24,
  },
  imageRight: {
    bottom: 0,
    right: 0,
  },
  imageLeft: {
    top: 0,
    left: 0,
  },
  space: {lineHeight: 20},
  bold: {fontWeight: 'bold'},
  button: {maxWidth: 100},
});

export default memo<Props>(UpComingEvent);
