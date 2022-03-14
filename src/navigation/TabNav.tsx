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
import { StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/homescreen/Index';
import Favorite from '../screen/favoritescreen/Index';
import Search from '../screen/searchscreen/Index';
import User from '../screen/user/Index';
import Dmovie from '../screen/dmovie/Index';

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
                uri: 'https://i.postimg.cc/v1hJ2Zvx/DOMOVIELOGO-HEADER.png',
              }}
              style={styles.iconhomenav}
            />
          </View>
        ),
        headerRight: ({}) => (
          <Icon
            name="bell"
            size={20}
            color="white"
            style={styles.icon_user}
          />
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
          bottom: 10,
          left: 20,
          right: 20,
          borderRadius: 20,
          paddingHorizontal: 10,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <Icon name="home" size={20} color="white" style={{}} />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={Favorite}
        options={{
          tabBarIcon: ({}) => (
            <Icon name="bookmark" size={20} color="white" style={{}} />
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
                  uri: 'https://i.postimg.cc/9RdJFqZ0/dwhite.png',
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
          tabBarIcon: ({}) => (
            <Icon name="search" size={20} color="white" style={{}} />
          ),
          headerBackgroundContainerStyle: {backgroundColor: 'black'},
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="     "
        component={User}
        options={{
          tabBarIcon: ({}) => (
            <Icon name="user" size={20} color="white" style={{}} />
          ),
          headerBackgroundContainerStyle: {backgroundColor: 'black'},
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  home: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#3066bc',
    borderWidth: 5,
    borderRadius: 50,
    height: 80,
    width: 80,
    paddingLeft: 4,
    paddingBottom: 10,
    paddingTop: 15,
  },
  iconhome: {
    height: 40,
    width: 60,
  },
  iconhomenav: {
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
    height: 30,
    width: 100,
  },
  icon_user: {
    marginRight: 20,
    marginTop: 10,
  },
});

export default TabNav;
