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
import {NavigationContainer} from '@react-navigation/native';
// import {TabNavigation} from './navigation/TabNavigation';
import TabNav from './navigation/TabNav';

const App = () => {
  return (
    <NavigationContainer>
      {/* <TabNavigation /> */}
      <TabNav />
    </NavigationContainer>
  );
};

export default App;
