/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyCarousel from '../../component/carousel/Index';
import Card from '../../component/card/Index';
import {Searchbar} from 'react-native-paper';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Searchbar style={styles.searchbar} placeholder="Search" value={''} />
        <MyCarousel />
        <Text style={styles.text_topic}>Trending</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            <Card />
            <Card />
            <Card />
          </View>
        </ScrollView>
        <Text style={styles.text_topic}>Keluarga</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            <Card />
            <Card />
            <Card />
          </View>
        </ScrollView>
        <Text style={styles.text_topic}>Serial Anak</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            <Card />
            <Card />
            <Card />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchbar: {
    margin: 10,
    borderRadius: 30,
    marginBottom: 15,
    backgroundColor: 'white',
    height: 45,
  },
  text_topic: {
    marginTop: 5,
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignContent: 'space-around',
    // paddingLeft: 30,
  },
});
