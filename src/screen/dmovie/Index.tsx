/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import Home from '../homescreen';
import {styles} from './styles';

const Dmovie = () => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholderTextColor={'white'}
        iconColor="white"
        selectionColor={'white'}
        style={styles.searchbar}
        placeholder="Search"
        value={''}
      />
      <Home/>
    </View>
  );
};

export default Dmovie;