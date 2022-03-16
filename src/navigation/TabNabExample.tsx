/* eslint-disable prettier/prettier */
import * as React from 'react';
// import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/homescreen';
import Favorite from '../screen/favoritescreen';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({}) => (
              <Icon name="home" size={23} style={{}} />
            ),
          }}
          name=" "
          component={Home}
        />
        <Tab.Screen name="  " component={Favorite} />
      </Tab.Navigator>
    );
}

export default function TabNavExample() {
    return (
        <MyTabs />
    );
}
