import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, View} from 'react-native-ui-lib';
interface Props {
  title?: string;
  titleColor?: string;
  children: React.ReactNode;
  button?: React.ReactNode;
  style?: any;
}

const CardDefault: FC<Props> = ({
  title,
  titleColor,
  children,
  button,
  ...style
}) => (
  <View paddingH-16 marginV-10 {...style}>
    <View row spread>
      {title && (
        <Text
          style={styles.title}
          marginL-20
          marginV-15
          color={titleColor}
          fs20>
          {title}
        </Text>
      )}
      {button}
    </View>
    <Card enableShadow={false}>{children}</Card>
  </View>
);

const styles = StyleSheet.create({
  title: {fontWeight: 'bold'},
});

export default memo<Props>(CardDefault);
