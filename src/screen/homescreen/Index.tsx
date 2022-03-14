/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { } from 'react';
import MyCarousel from '../../component/carousel/Index';
import Card from '../../component/card/Index';
// import axios from 'axios';

// const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w1280/';
// interface IMovie {
//   id: string;
//   poster_path: string;
//   release_date: string;
//   date: string;
//   title: string;
//   vote_average: string;
//   overview: string;
//   backdrop_path: string;
//   original_language: string;
//   media_type: string;
// }

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MyCarousel />
        <Text style={styles.text_topic}>Trending</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            <Card />
            <Card />
            <Card />
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
