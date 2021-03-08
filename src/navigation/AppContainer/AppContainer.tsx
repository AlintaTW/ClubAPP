import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainTab from '../Stacks/MainTab';
import {FaceCallScreen} from '@src/screens';

const Stack = createStackNavigator();

const AppContainer = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

const RootStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen component={MainTab} name="MainTab" />
    <Stack.Screen component={FaceCallScreen} name="FACE_CALL" />
  </Stack.Navigator>
);

export default AppContainer;
