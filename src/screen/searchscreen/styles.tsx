/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchbar: {
    color: 'white',
    margin: 10,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: '#1b1f20',
    height: 45,
  },
  recomendations: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginRight: 15,
  },
  recomendation_text: {
    marginTop: 10,
    marginLeft: 10,
  },
  recomendation_image: {
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
    width: 180,
    height: 90,
  },
});
