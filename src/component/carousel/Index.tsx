/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Carousel from 'pinar';

const MyCarousel = () => (
  <View style={styles.container}>
    <Carousel style={styles.containercar}>
      <View style={styles.slide1}>
        <Image
          style={styles.slide1image}
          source={require('../../images/gambar3.webp')}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          style={styles.slide2image}
          source={require('../../images/seven-poster.jpg')}
        />
      </View>
      <View style={styles.slide3}>
        <Image
          style={styles.slide3image}
          source={require('../../images/encanto-hd.jpg')}
        />
      </View>
    </Carousel>
  </View>
);

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    // marginRight: 10,
    width: 410,
    height: 200,
    // marginRight: 20,
    // marginLeft: 15,
    // borderRadius: 20,
  },
  containercar: {
    width: 410,
    height: 200,
    // width: 380,
    // height: 170,
    borderRadius: 50,
  },
  slide1: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1image: {
    borderRadius: 50,
  },
  slide2image: {
    borderRadius: 50,
  },
  slide3image: {
    borderRadius: 50,
  },
  slide2: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});