/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../component/card';

import axios from 'axios';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w1280/';
interface IMovie {
  id: string;
  genre_ids: number[];
  title: string;
  vote_average: string;
  release_date: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  original_language: string;
  media_type: string;
}

const OnGoing = () => {
  const [dataMovie, setDataMovie] = useState<IMovie[]>([]);

  const fetchOnGoing = async () => {
    const {data} = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=eccc5ea1919b90fc7004f8df41e8beed&language=en-US&page=$1',
    );
    console.log(data.results);
    setDataMovie(data.results);
  };

  useEffect(() => {
    fetchOnGoing();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text_topic}>On Going</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            {dataMovie &&
              dataMovie.map(c => (
                <Card
                  key={c.id}
                  // id={c.id}
                  genre_ids={c.genre_ids}
                  poster_path={`${BASE_IMAGE_URL}${c.poster_path}`}
                  backdrop_path={`${BASE_IMAGE_URL}${c.backdrop_path}`}
                  title={c.title}
                  release_date={c.release_date}
                  vote_average={c.vote_average}
                  overview={c.overview}
                  media_type={c.media_type}
                  original_language={c.original_language} id={''}                />
              ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default OnGoing;

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
    // flexWrap: 'wrap',
    alignContent: 'space-around',
    // paddingLeft: 30,
  },
});
