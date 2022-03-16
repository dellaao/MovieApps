/* eslint-disable prettier/prettier */
import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyCarousel from '../../component/carousel';
import Card from '../../component/card';
import axios from 'axios';
import OnGoing from './OnGoing';
import Upcoming from './Upcoming';
import {styles} from './styles';

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
  genre_ids: number[];
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
        <Text style={styles.text_topic}>Trending</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            {dataMovie &&
              dataMovie.map(c => (
                <Card
                  id={c.id}
                  key={c.id}
                  genre_ids={c.genre_ids} //harusnya genreIds
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

