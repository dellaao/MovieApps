/* eslint-disable prettier/prettier */
import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ava}>
        <Image
          source={{
            uri: 'https://i.postimg.cc/Y07JqRqR/user.png',
          }}
          style={styles.myava}
        />
        <View style={styles.ava_text}>
          <Text style={styles.nama}>Della Amelia</Text>
          <Text style={styles.status}>Premium</Text>
          <Text style={styles.alamat}>Indonesia</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.bioteks}>SETTINGS</Text>
      </View>
      <View>
        <View style={styles.setting}>
          <Text style={styles.titlesetting1}>MEMBERSHIP</Text>
          <View style={styles.usersetting}>
            <Text style={styles.titlesetting}>DO Movie Bulanan</Text>
            <Text>Subscription Valid Till 19 Mar 2022</Text>
          </View>
          <View style={styles.usersetting}>
            <Text style={styles.titlesetting}>DO Movie Bulanan</Text>
            <Text>Subscription Valid Till 23 Mar 2022</Text>
          </View>
        </View>
        <View style={styles.setting}>
          <Text style={styles.titlesetting1}>ACCOUNT AND SECURITY</Text>
          <View style={styles.usersetting2}>
            <Text style={styles.titlesetting}>Preferences</Text>
          </View>
          <View style={styles.usersetting2}>
            <Text style={styles.titlesetting}>Log out</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default User;
