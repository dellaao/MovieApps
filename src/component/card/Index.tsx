/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import { Image } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import {styles} from './styles';
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

const Card = (props: IMovie) => {
  const [modalVisible, setModalVisible] = useState(false);

  const storeData = async (value: IMovie) => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites'); //ambil data dengan id favorite
      const data = jsonValue != null ? JSON.parse(jsonValue as string) : []; 
      data.push(value);
      await AsyncStorage.setItem('@favorites', JSON.stringify(data)); //ubah data jadi string
      console.log(value);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <View style={styles.card_container}>
        <TouchableHighlight onPress={() => setModalVisible(true)}>
          <Image
            style={styles.card}
            source={{
              uri: `https://image.tmdb.org/t/p/w1280/${props.poster_path}`,
            }}
          />
        </TouchableHighlight>
        <Text style={styles.card_title}>{props.title}</Text>
        <Text style={styles.card_releasedate}>{props.release_date}</Text>
        <View style={styles.rating}>
          <Icon name="star" size={15} color="orange" />
          <Text style={styles.rating_text}>{props.vote_average}</Text>
        </View>
      </View>
      <View style={styles.modal_container}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  style={styles.bg_details}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w1280/${props.backdrop_path}`,
                  }}
                  blurRadius={4}
                />
                <View style={styles.exitbutton}>
                  <Icon
                    onPress={() => setModalVisible(!modalVisible)}
                    name="close"
                    size={30}
                    color="white"
                  />
                </View>
                <View style={styles.details}>
                  <Image
                    style={styles.card}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w1280/${props.poster_path}`,
                    }}
                  />
                  <View style={styles.playbutton}>
                    <Icon name="play" size={20} color="white" />
                  </View>
                  <View style={styles.download}>
                    <Icon name="download" size={20} color="white" />
                  </View>
                  <Text style={styles.modalTitle}>{props.title}</Text>
                  <View style={styles.details_text}>
                    <View>
                      <Text style={styles.title_details}>Rating</Text>
                      <Text style={styles.text_details}>
                        {props.vote_average}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.title_details}>Language</Text>
                      <Text style={styles.text_details}>
                        {props.original_language}
                      </Text>
                    </View>
                  </View>
                  <ScrollView>
                    <Text style={styles.overview}>{props.overview}</Text>
                  </ScrollView>
                  <Button
                    style={[styles.button, styles.addfavorite]}
                    mode="contained"
                    icon="plus"
                    onPress={() => storeData(props)}>
                    Add Favorite
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default Card;

