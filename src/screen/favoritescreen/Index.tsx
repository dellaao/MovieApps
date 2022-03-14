/* eslint-disable prettier/prettier */
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import React from 'react';
import Card from '../../component/card/Index';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Favorite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.favorite}>My Favorite</Text>
      <ScrollView>
        <View style={styles.card}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  favorite: {
    // textAlign:'center',
    marginLeft: 10,
    marginVertical: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  text_trending: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 25,
    // alignContent: 'space-around',
    // paddingLeft: 30,
  },
});
