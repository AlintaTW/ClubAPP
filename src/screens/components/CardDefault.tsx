import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, View} from 'react-native-ui-lib';
interface Props {
  title?: string;
  children: React.ReactNode;
  style?: any;
}

const CardDefault: FC<Props> = ({title, children, ...style}) => {
  return (
    <View paddingH-16 marginV-20 {...style}>
      {title && (
        <Text style={styles.title} marginL-20 marginV-15>
          {title}
        </Text>
      )}
      <Card>{children}</Card>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 20, fontWeight: 'bold'},
});

export default memo<Props>(CardDefault);
