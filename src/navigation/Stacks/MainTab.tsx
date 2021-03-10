import React, {FC, ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';

import {
  Colors,
  IconHome,
  IconHistory,
  IconFavorite,
  IconNotifications,
  IconProfile,
} from '@src/assets';
import {HomeScreen} from '@src/screens';
import i18n from '@src/localization';
import HomeStack from './HomeStack';
import {actuatedNormalize} from '@src/untils/viewScale';

const Tab = createBottomTabNavigator();

interface IconProps {
  active?: boolean;
  children: ReactNode;
}

const Icon: FC<IconProps> = ({active, children}) => {
  if (active) {
    return (
      <View style={styles.containerIcon}>
        <View style={styles.line} />
        <View style={styles.tabIcon} />
        <View style={styles.containerActive}>{children}</View>
      </View>
    );
  }
  return <>{children}</>;
};

const MainTab = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.readAlizarin,
      inactiveTintColor: Colors.greyDrank,
      labelStyle: {
        paddingBottom: 5,
        fontSize: actuatedNormalize(11),
      },
    }}>
    <Tab.Screen
      name="HomeStack"
      options={{
        title: i18n.t('navigation.home'),
        unmountOnBlur: true,
        tabBarIcon: ({color}) => (
          <Icon active={color === Colors.readAlizarin}>
            <IconHome active={color === Colors.readAlizarin} color={color} />
          </Icon>
        ),
      }}
      component={HomeStack}
    />
    <Tab.Screen
      name="HISTORY"
      options={{
        title: i18n.t('navigation.history'),
        unmountOnBlur: true,
        tabBarIcon: ({color}) => (
          <Icon active={color === Colors.readAlizarin}>
            <IconHistory color={color} />
          </Icon>
        ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="FAVORITE"
      options={{
        title: i18n.t('navigation.favorite'),
        unmountOnBlur: true,
        tabBarIcon: ({color}) => (
          <Icon active={color === Colors.readAlizarin}>
            <IconFavorite color={color} />
          </Icon>
        ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="NOTIFICATIONS"
      options={{
        title: i18n.t('navigation.notification'),
        unmountOnBlur: true,
        tabBarIcon: ({color}) => (
          <Icon active={color === Colors.readAlizarin}>
            <IconNotifications color={color} />
          </Icon>
        ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="PROFILE"
      options={{
        title: i18n.t('navigation.profile'),
        unmountOnBlur: true,
        tabBarIcon: ({color}) => (
          <Icon active={color === Colors.readAlizarin}>
            <IconProfile color={color} />
          </Icon>
        ),
      }}
      component={HomeScreen}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  containerActive: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    borderRadius: 30,
    display: 'flex',
    height: 60,
    justifyContent: 'center',
    marginTop: -5,
    width: 60,
  },
  containerIcon: {
    height: 60,
    width: 60,
    backgroundColor: Colors.white,
    borderRadius: 30,
  },
  line: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: Colors.greyVeryLight,
    opacity: 0.8,
  },
  tabIcon: {
    backgroundColor: Colors.white,
    position: 'absolute',
    height: 45,
    width: 60,
    bottom: 0,
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
