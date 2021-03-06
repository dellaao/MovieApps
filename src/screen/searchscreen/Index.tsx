/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import { styles } from './styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholderTextColor={'white'}
        iconColor="white"
        selectionColor={'white'}
        style={styles.searchbar}
        placeholder="Search"
        value={''}
      />
      <Text style={styles.recomendation_text}>Rekomendasi</Text>
      <View style={styles.recomendations}>
        <Image
          style={styles.recomendation_image}
          source={{
            uri: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/15/931293312.jpg',
          }}
          blurRadius={4}
        />
        <Image
          style={styles.recomendation_image}
          source={{
            uri: 'https://i.pinimg.com/564x/a6/d0/98/a6d09890abd5a885553d239c7d984ff7.jpg',
          }}
          blurRadius={2}
        />
        <Image
          style={styles.recomendation_image}
          source={{
            uri: 'https://i.pinimg.com/564x/1b/24/73/1b2473e947e7e6a1f201f6fed689fbb7.jpg',
          }}
          blurRadius={1}
        />
        <Image
          style={styles.recomendation_image}
          source={{
            uri: 'https://i.pinimg.com/564x/b9/b7/8c/b9b78c6a651f6bd2c5872a3d87024a71.jpg',
          }}
          blurRadius={2}
        />
      </View>
    </View>
  );
};
export default Search;
