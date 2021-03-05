import {Colors, Images} from '@src/assets';
import {images} from '@src/assets/Images';
import {CardDefault} from '@src/screens/components';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib';

interface Props {
  item: any;
  onDialog: () => void;
}
const UpComingEvent = ({item, onDialog}: Props) => {
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
          <Text style={[styles.space, styles.bold]}>{item.name}</Text>
          <Text color={Colors.orangeCarrot} style={styles.space}>
            {item.time}
          </Text>
          <View row centerV>
            <Text style={styles.space}>大人 {item.aduslts} 位 </Text>
            <View br10 backgroundColor={Colors.black} height={5} width={5} />
            <Text> 小孩 {item.children} 位</Text>
          </View>
        </>
      ) : (
        <Text>尚無即將到來的活動</Text>
      )}
    </View>
  );
  return (
    <CardDefault title="即將到來活動">
      <View row br40 marginV-25 marginH-20 centerV spread>
        {renderImage()}
        {renderEvent()}
        <Button
          label="電子票"
          backgroundColor={Colors.alizarin}
          labelStyle={styles.labelButton}
          size="small"
          onPress={onDialog}
        />
      </View>
      <Image
        source={images.common.arrowLeft}
        style={[styles.imageLeft, styles.imageStyle]}
      />
      <Image
        source={images.common.arrowRight}
        style={[styles.imageRight, styles.imageStyle]}
      />
    </CardDefault>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.smokeWhite,
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
  space: {lineHeight: 20, fontSize: 14},
  labelButton: {fontSize: 14, height: 20},
  bold: {fontWeight: 'bold'},
});
export default UpComingEvent;
