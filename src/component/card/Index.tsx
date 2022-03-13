/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import { Image } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';



const Card = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.card_container}>
        <TouchableHighlight onPress={() => setModalVisible(true)}>
          <Image
            style={styles.card}
            source={require('../../images/rons-poster.jpg')}
          />
        </TouchableHighlight>
        <Text style={styles.card_title}>Judul</Text>
        <Text style={styles.card_releasedate}>Release Date</Text>
        <View style={styles.rating}>
          <Icon name="star" size={15} color="orange" />
          <Text style={styles.rating_text}>8.0</Text>
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
                  source={require('../../images/frozen2-hd.jpg')}
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
                    source={require('../../images/frozen-poster.jpg')}
                  />
                  <View style={styles.playbutton}>
                    <Icon name="play" size={20} color="white" />
                  </View>
                  <View style={styles.download}>
                    <Icon name="download" size={20} color="white" />
                  </View>
                  <Text style={styles.modalTitle}>Judul</Text>
                  <View style={styles.details_text}>
                    <View>
                      <Text style={styles.title_details}>Duration</Text>
                      <Text style={styles.text_details}>02h 15m</Text>
                    </View>
                    <View>
                      <Text style={styles.title_details}>Genre</Text>
                      <Text style={styles.text_details}>Romance</Text>
                    </View>
                    <View>
                      <Text style={styles.title_details}>Language</Text>
                      <Text style={styles.text_details}>Indonesia</Text>
                    </View>
                  </View>
                  <Text style={styles.modalText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita, totam? Mollitia placeat dolorum, consequatur eum
                    distinctio perferendis debitis nobis animi obcaecati autem.
                    Eligendi, mollitia? Magnam doloribus eum sit fugit soluta?
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Add Favorite</Text>
                  </Pressable>
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
    bottom: 300,
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
    height: 600,
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
    padding: 10,
    elevation: 2,
  },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  buttonClose: {
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
  modalText: {
    margin: 5,
    textAlign: 'justify',
  },
  details: {
    top: 97,
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
