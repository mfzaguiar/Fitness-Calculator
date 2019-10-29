import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '~/pages/Home';
import IMC from '~/pages/IMC';
import History from '~/pages/History';

const mainNavigation = createBottomTabNavigator(
  {
    New: {
      screen: createStackNavigator(
        {
          Home,
          IMC,
        },
        {
          defaultNavigationOptions: {
            headerTransparent: true,
            headerTintColor: '#fff',
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
          },
        }
      ),
      navigationOptions: {
        tabBarVisible: true,
        tabBarLabel: 'Home',
        tabBarIcon: (
          <Icon name="home" size={20} color="rgba(255, 255, 255, 0.6)" />
        ),
      },
    },
    History: { screen: History },
  },
  {
    resetOnBlur: true,
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      style: {
        backgroundColor: 'rgba(0,0,0,0.9)',
      },
    },
  }
);

export default createAppContainer(mainNavigation);
