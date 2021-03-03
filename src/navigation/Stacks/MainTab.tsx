import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View} from 'react-native';

import {Colors} from '@src/assets';
import {HomeScreen} from '@src/screens';

const Tab = createBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.readAlizarin,
      inactiveTintColor: Colors.greyDrank,
      labelStyle: {
        paddingBottom: 5,
        fontSize: 13,
      },
    }}>
    <Tab.Screen
      name="HOME"
      options={{
        title: 'Home',
        unmountOnBlur: true,
        tabBarIcon: ({color}) =>
          color === Colors.readAlizarin ? (
            <View style={styles.containerActive}>
              <MaterialIcons
                color={color}
                name="home"
                style={styles.iconActive}
              />
            </View>
          ) : (
            <MaterialIcons color={color} name="home" style={styles.icon} />
          ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="HISTORY"
      options={{
        title: 'History',
        unmountOnBlur: true,
        tabBarIcon: ({color}) =>
          color === Colors.readAlizarin ? (
            <View style={styles.containerActive}>
              <Ionicons
                color={color}
                name="ios-calendar"
                style={styles.iconActive}
              />
            </View>
          ) : (
            <Ionicons color={color} name="ios-calendar" style={styles.icon} />
          ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="FAVORITE"
      options={{
        title: 'Favorite',
        unmountOnBlur: true,
        tabBarIcon: ({color}) =>
          color === Colors.readAlizarin ? (
            <View style={styles.containerActive}>
              <MaterialIcons
                color={color}
                name="favorite"
                style={styles.iconActive}
              />
            </View>
          ) : (
            <MaterialIcons color={color} name="favorite" style={styles.icon} />
          ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="NOTIFICATIONS"
      options={{
        title: 'Notification',
        unmountOnBlur: true,
        tabBarIcon: ({color}) =>
          color === Colors.readAlizarin ? (
            <View style={styles.containerActive}>
              <MaterialIcons
                color={color}
                name="notifications"
                style={styles.iconActive}
              />
            </View>
          ) : (
            <MaterialIcons
              color={color}
              name="notifications"
              style={styles.icon}
            />
          ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="PROFILE"
      options={{
        title: 'Profile',
        unmountOnBlur: true,
        tabBarIcon: ({color}) =>
          color === Colors.readAlizarin ? (
            <View style={styles.containerActive}>
              <MaterialIcons
                color={color}
                name="person"
                style={styles.iconActive}
              />
            </View>
          ) : (
            <MaterialIcons color={color} name="person" style={styles.icon} />
          ),
      }}
      component={HomeScreen}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  containerActive: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 40,
    display: 'flex',
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  icon: {
    fontSize: 25,
    paddingTop: 5,
  },
  iconActive: {
    fontSize: 30,
    marginTop: -5,
  },
});

export default MainTab;
