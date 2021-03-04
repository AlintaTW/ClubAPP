import React, {FC, memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet, StatusBarProps, StatusBar} from 'react-native';

interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  backgroundBody?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    height: 0,
  },
});

const Container: FC<Props & StatusBarProps> = ({
  children,
  header,
  footer,
  backgroundBody,
  ...statusBarProps
}) => (
  <View style={styles.container}>
    <StatusBar {...statusBarProps} />
    {header || (
      <SafeAreaView
        edges={['right', 'left', 'top']}
        style={{backgroundColor: statusBarProps.backgroundColor}}
      />
    )}
    <SafeAreaView
      edges={['right', 'left']}
      style={[styles.container, {backgroundColor: backgroundBody}]}>
      {children}
    </SafeAreaView>
    {footer}
  </View>
);

export default memo<Props & StatusBarProps>(Container);
