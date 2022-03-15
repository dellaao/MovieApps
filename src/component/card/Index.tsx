/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  // Pressable,
  Alert,
  Modal,
  TouchableHighlight,
  ScrollView,
  // Button,
} from 'react-native';
import React, {useState} from 'react';
import { Image } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
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
                      <Text style={styles.title_details}>Media Type</Text>
                      <Text style={styles.text_details}>
                        {props.media_type}
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

const styles = StyleSheet.create({
  card_container: {
    borderRadius: 10,
    margin: 10,
    // backgroundColor: 'white',
    width: 150,
  },
  card: {
    borderRadius: 10,
    width: 150,
    height: 200,
  },
  card_title: {
    fontWeight: '600',
  },
  card_releasedate: {
    color: 'grey',
  },
  rating: {
    top: 175.5,
    left: 107.5,
    padding: 3,
    flexDirection: 'row',
    position: 'absolute',
    borderRadius: 7,
    // backgroundColor: '#2b2e30',
  },
  rating_text: {
    fontSize: 12,
    marginLeft: 3,
    color: 'white',
  },
  buttons: {
    top: 400,
    flexDirection: 'row',
    position: 'absolute',
    marginRight: 50,
    justifyContent: 'space-around',
  },
  exitbutton: {
    top: 10,
    left: 380,
    position: 'absolute',
    borderRadius: 50,
  },
  download: {
    top: 140,
    left: 280,
    position: 'absolute',
    backgroundColor: '#3066bc',
    borderRadius: 50,
    height: 50,
    width: 50,
    paddingLeft: 15,
    paddingTop: 14,
  },
  playbutton: {
    top: 140,
    left: 200,
    position: 'absolute',
    backgroundColor: '#3066bc',
    borderRadius: 50,
    height: 50,
    width: 50,
    paddingLeft: 19,
    paddingTop: 14,
  },
  modal_container: {
    flex: 1,
  },
  bg_details: {
    position: 'absolute',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 400,
    width: 412,
    height: 300,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // top: 20,
    width: 412,
    height: 700,
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    margin: 10,
    borderRadius: 20,
    elevation: 2,
  },
  addfavorite: {
    bottom: 70,
    backgroundColor: '#3066bc',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    // top: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  overview: {
    // height: 40,
    // flex: 1,
    margin: 5,
    textAlign: 'justify',
    // backgroundColor: 'white',
    // bottom: 80,
  },
  details: {
    top: 100,
  },
  details_text: {
    // backgroundColor:'white',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title_details: {
    // textAlign: 'center',
    marginHorizontal: 10,
    fontWeight: '600',
    fontSize: 12,
  },
  text_details: {
    fontSize: 10,
    marginHorizontal: 10,
  },
});

