/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/homescreen';
import Favorite from '../screen/favoritescreen';
import Search from '../screen/searchscreen';
import User from '../screen/user';
import Dmovie from '../screen/dmovie';
import {styles} from './styles';

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: true,
        headerLeft: ({}) => (
          <View>
            <Image
              source={{
                uri: 'https://i.postimg.cc/zGpXmL74/DOMOVIELOGO-HEADER.png',
              }}
              style={styles.iconhomenav}
            />
          </View>
        ),
        headerRight: ({}) => (
          <Icon name="bell" size={20} style={styles.icon_user} />
        ),
        headerStyle: {
          backgroundColor: 'black',
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0.2,
          borderTopColor: 'black',
          backgroundColor: 'black',
          position: 'absolute',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 10,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          tabBarActiveBackgroundColor: '#171717',
          tabBarIcon: ({}) => (
            <Icon name="home" color="white" size={23} style={{}} />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={Favorite}
        options={{
          tabBarActiveBackgroundColor: '#171717',
          tabBarIcon: ({}) => (
            <Icon name="bookmark" color="white" size={23} style={{}} />
          ),
        }}
      />
      <Tab.Screen
        name="   "
        component={Dmovie}
        options={{
          tabBarIcon: ({}) => (
            <View style={styles.home}>
              <Image
                source={{
                  uri: 'https://i.postimg.cc/F1QQMvwP/DOMOVIE-LOGO.png',
                }}
                style={styles.iconhome}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="    "
        component={Search}
        options={{
          tabBarActiveBackgroundColor: '#171717',
          tabBarIcon: ({}) => (
            <Icon name="search" color="white" size={23} style={{}} />
          ),
        }}
      />
      <Tab.Screen
        name="     "
        component={User}
        options={{
          tabBarActiveBackgroundColor: '#171717',
          tabBarIcon: ({}) => (
            <Icon name="user" color="white" size={23} style={{}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};



export default TabNav;
