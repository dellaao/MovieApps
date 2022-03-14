/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import Home from '../homescreen/Index';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchbar: {
    color: 'white',
    margin: 10,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: '#1b1f20',
    height: 45,
  },
});
