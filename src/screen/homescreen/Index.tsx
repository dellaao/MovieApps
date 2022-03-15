/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import MyCarousel from '../../component/carousel/Index';
import Card from '../../component/card/Index';
import axios from 'axios';
import OnGoing from './OnGoing';
import Upcoming from './Upcoming';
// import Carousel from 'pinar';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w1280/';
interface IMovie {
  id: string;
  title: string;
  vote_average: string;
  release_date: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  original_language: string;
  media_type: string;
}

const Home = () => {
  const [dataMovie, setDataMovie] = useState<IMovie[]>([]);

  const fetchTrending = async () => {
    const {data} = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=eccc5ea1919b90fc7004f8df41e8beed&language=en-US&page=1',
    );
    console.log(data.results);
    setDataMovie(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);


  return (
    <ScrollView>
      <View style={styles.container}>
        <MyCarousel />

        {/* <Carousel style={styles.carousel}>
          <View style={styles.slide1}>
            {dataMovie &&
              dataMovie.map(c => (
                <Image
                  style={styles.slide1image}
                  source={{
                    uri: `${BASE_IMAGE_URL}${c.backdrop_path}`,
                  }}
                />
              ))}
          </View>
        </Carousel> */}

        <Text style={styles.text_topic}>Trending</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            {dataMovie &&
              dataMovie.map(c => (
                <Card
                  id={c.id}
                  key={c.id}
                  poster_path={`${BASE_IMAGE_URL}${c.poster_path}`}
                  backdrop_path={`${BASE_IMAGE_URL}${c.backdrop_path}`}
                  title={c.title}
                  release_date={c.release_date}
                  vote_average={c.vote_average}
                  overview={c.overview}
                  media_type={c.media_type}
                  original_language={c.original_language}
                />
              ))}
          </View>
        </ScrollView>
        <Upcoming />
        <OnGoing />
        <View style={styles.footer}></View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // height: 280,
  },
  text_topic: {
    marginTop: 5,
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
  card: {
    height: 260,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  footer: {
    height: 100,
  }
  // container_carousel: {
  //   flex: 1,
  // },
  // carousel: {
  //   width: 410,
  //   height: 200,
  //   borderRadius: 50,
  // },
  // slide1: {
  //   position: 'relative',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // slide1image: {
  //   borderRadius: 50,
  // },
});
