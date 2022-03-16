/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import Carousel from 'pinar';

const MyCarousel = () => (
  <View style={styles.container_carousel}>
    <Carousel style={styles.carousel}>
      <View style={styles.slide1}>
        <Image
          style={styles.slide1image}
          source={require('../../images/gambar3.webp')}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          style={styles.slide2image}
          source={require('../../images/gambar2.webp')}
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

