/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/homescreen/Index';
import Favorite from '../screen/favoritescreen/Index';
import Search from '../screen/searchscreen/Index';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = () => {
    return (
      <Tab.Navigator
        // screenOptions={{
        //   tabBarStyle: {position: 'absolute', backgroundColor: 'black'},
        // }}
        screenOptions={
          {
            // tabBarShowLabel: 'false',
          }
        }
        initialRouteName="Feed"
        activeColor="#f0edf6"
        inactiveColor="#EEEEEE"
        barStyle={styles.navigation}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({}) => (
              <View style={styles.home}>
                <Image
                  source={{
                    uri: 'https://i.postimg.cc/MGFpgMF7/olaf.png',
                  }}
                  style={styles.iconhome}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({}) => (
              <Icon name="bookmark" size={20} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({}) => <Icon name="search" size={20} color="white" />,
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
  home: {
    height: 30,
    width: 50,
  },
  iconhome: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 30,
    width: 50,
  },
});
