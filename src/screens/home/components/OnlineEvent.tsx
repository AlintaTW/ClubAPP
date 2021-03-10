import React, {FC, memo} from 'react';
import {Button, Card, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';

import {onlineEvent} from '@src/untils/dummyData';
import {Colors} from '@src/assets';
import {CardDefault} from '@src/screens/components';
import i18n from '@src/localization';

interface Props {
  onDisplay?: () => void;
}
interface CellProps {
  data: any;
  index: number;
  onDisplay?: () => void;
}

const Cell: FC<CellProps> = ({data, index, onDisplay}) => (
  <>
    {index < 3 && (
      <TouchableOpacity row style={styles.containerItem} onPress={onDisplay}>
        <View center paddingV-20>
          <Card.Section
            imageStyle={styles.imageStyle}
            imageSource={data.thumnail}
          />
          <View style={styles.iconContainerStyle} br40>
            <AntDesign name="play" style={styles.iconStyle} />
          </View>
        </View>
        <View
          style={[styles.rightItem, index === 2 ? {} : styles.borderItem]}
          marginL-7
          center
          flex>
          <Text style={styles.line} color={Colors.greyNightRider} fs16>
            {data.title}
          </Text>
        </View>
      </TouchableOpacity>
    )}
  </>
);

const OnlineEvent: FC<Props> = ({onDisplay}) => {
  const CustomButton = () => {
    return (
      <Button link onPress={onDisplay}>
        <Text color={Colors.orangeCarrot} marginR-10>
          {i18n.t('home.all')}
        </Text>
        <FontAwesome
          name="chevron-right"
          color={Colors.orangeCarrot}
          size={16}
        />
      </Button>
    );
  };

  return (
    <CardDefault
      title={i18n.t('home.online_event')}
      titleColor={Colors.greyNightRider}
      button={<CustomButton />}>
      <View marginH-20 marginV-10>
        {onlineEvent.map((item: any, index: number) => (
          <Cell data={item} index={index} key={index} onDisplay={onDisplay} />
        ))}
      </View>
    </CardDefault>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    height: 90,
  },
  rightItem: {
    borderBottomColor: Colors.black08,
  },
  borderItem: {
    borderBottomWidth: 1,
  },
  imageStyle: {
    minWidth: 100,
    minHeight: 70,
    borderRadius: 16,
    maxWidth: 200,
    position: 'relative',
  },
  iconContainerStyle: {
    backgroundColor: Colors.white,
    position: 'absolute',
  },
  iconStyle: {
    fontSize: 24,
    color: Colors.orangeCarrot,
  },
  line: {lineHeight: 20},
});

export default memo<Props>(OnlineEvent);
