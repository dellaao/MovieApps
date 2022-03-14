/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ava}>
        <Image
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
          }}
          style={styles.myava}
        />
        <View style={styles.ava_text}>
          <Text style={styles.nama}>Jung Jaehyun</Text>
          <Text style={styles.status}>Member</Text>
          <Text style={styles.alamat}>Indonesia</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.bioteks}>Settings</Text>
      </View>
      <View>
        <View style={styles.setting}>
          <Text style={styles.titlesetting1}>MEMBERSHIP</Text>
          <View style={styles.usersetting}>
            <Text style={styles.titlesetting}>D Movie Bulanan</Text>
            <Text>Subscription Valid Till 19 Mar 2022</Text>
          </View>
          <View style={styles.usersetting}>
            <Text style={styles.titlesetting}>D Movie Bulanan</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  ava: {
    margin: 10,
    flexDirection: 'row',
  },
  ava_text: {
    marginLeft: 10,
  },
  myava: {
    borderRadius: 8,
    width: 100,
    height: 100,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3066bc',
  },
  alamat: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 12,
  },
  bio: {
    marginTop: 20,
    backgroundColor: '#3066bc',
    paddingVertical: 6,
    borderRadius: 25,
  },
  bioteks: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  setting: {
    marginHorizontal: 7,
    paddingVertical: 5,
  },
  usersetting: {
    paddingLeft: 5,
    marginBottom: 10,
    paddingVertical: 5,
    backgroundColor: '#1b1f20',
    height: 80,
  },
  usersetting2: {
    paddingLeft: 5,
    marginBottom: 10,
    paddingVertical: 5,
    backgroundColor: '#1b1f20',
    height: 50,
  },
  titlesetting1: {
    // fontSize: 16,
    marginBottom: 10,
  },
  titlesetting: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
});
