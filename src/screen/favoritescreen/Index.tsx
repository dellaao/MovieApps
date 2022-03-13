/* eslint-disable prettier/prettier */
import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Card from '../../component/card/Index';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Favorite = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
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
