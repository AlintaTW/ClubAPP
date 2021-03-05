import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, View} from 'react-native-ui-lib';
interface Props {
  title: string;
  children: React.ReactNode;
}
const CardDefault: FC<Props> = ({title, children}) => {
  return (
    <View paddingH-16 marginV-20>
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
export default CardDefault;
