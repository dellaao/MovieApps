/* eslint-disable prettier/prettier */
import {View, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../component/card';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import {styles} from './styles'
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
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w1280/';

const Favorite = () => {
  const navigation = useNavigation();

  const [dataFavorite, setDataFavorite] = useState<IMovie[]>([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites'); //mengambil data dengan id favorites
      if (jsonValue !== null) { //kalau datanya ada, data tersebut diubah menjadi objek
        let newData = JSON.parse(jsonValue as string);
        setDataFavorite(newData); // data baru dimasukkan di set usestate
      } else {
        console.log('data kosong');
        return [];
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData(); //data baru dijalankan di useeffect
    });
    return unsubscribe;
  }, [navigation]);

  const RemoveData = async (item: IMovie) => {
    try {
      const dataBaru = [...dataFavorite]; 
      const contactIndex = dataFavorite.findIndex( //cari data yang ingin dihapus
        movie => movie.id === item.id,
      );
      dataBaru.splice(contactIndex, 1); //cari index ke berapa trus dihapus
      await AsyncStorage.setItem('@favorites', JSON.stringify(dataBaru)); //data yang terbaru diubah ke asyncstorage kembali
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.favorite}>My Favorite</Text>
      <ScrollView>
        <View style={styles.card}>
          {dataFavorite &&
            dataFavorite.map(c => (
              <View>
                <Card
                  id={c.id}
                  key={c.id}
                  genre_ids={c.genre_ids}
                  poster_path={`${BASE_IMAGE_URL}${c.poster_path}`}
                  backdrop_path={`${BASE_IMAGE_URL}${c.backdrop_path}`}
                  title={c.title}
                  release_date={c.release_date}
                  vote_average={c.vote_average}
                  overview={c.overview}
                  media_type={c.media_type}
                  original_language={c.original_language}
                />
                <Button
                  style={[styles.button, styles.removefavorite]}
                  mode="contained"
                  icon="delete"
                  onPress={() => RemoveData(c)}>
                  remove
                </Button>
              </View>
            ))}
        </View>
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
};

export default Favorite;


