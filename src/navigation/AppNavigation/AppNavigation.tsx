import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {FC} from 'react';
import AppContainer from '../AppContainer/AppContainer';

export const AppNavigation: FC = () => (
  <SafeAreaProvider>
    <AppContainer />
  </SafeAreaProvider>
);
