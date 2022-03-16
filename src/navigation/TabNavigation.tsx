/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/homescreen';
import Favorite from '../screen/favoritescreen';
import Search from '../screen/searchscreen';
import User from '../screen/user';
import Dmovie from '../screen/dmovie';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = () => {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#f0edf6"
        inactiveColor="#EEEEEE"
        barStyle={styles.navigation}>
        <Tab.Screen
          name=" "
          component={Home}
          options={{
            tabBarIcon: ({}) => (
              <Icon name="home" size={23} style={{}} />
            ),
          }}
        />
        <Tab.Screen
          name="  "
          component={Favorite}
          options={{
            tabBarIcon: ({}) => (
              <Icon name="bookmark" size={23} style={{}} />
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
            tabBarIcon: ({}) => (
              <Icon name="search" size={23} style={{}} />
            ),
          }}
        />
        <Tab.Screen
          name="     "
          component={User}
          options={{
            tabBarIcon: ({}) => (
              <Icon name="user" size={23} style={{}} />
            ),
          }}
        />
      </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    borderRadius: 20,
    borderWidth: 5,
    backgroundColor: 'black',
    margin: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
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
    // backgroundColor: '#3066bc',
    // borderWidth: 5,
    // borderRadius: 50,
    // height: 80,
    // width: 80,
    // paddingLeft: 4,
    // paddingBottom: 10,
    // paddingTop: 15,
  },
  iconhome: {
    height: 75,
    width: 75,
    bottom: 8,
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
