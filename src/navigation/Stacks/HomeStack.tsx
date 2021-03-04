import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '@src/screens';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen component={HomeScreen} name="HOME" />
  </Stack.Navigator>
);

export default HomeStack;
