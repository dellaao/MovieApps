/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Notification = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.notification}>Notification</Text>
        <Text>No Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
    notification:{
        fontSize: 16,
        fontWeight: '600'
    },
    container: {
        backgroundColor: 'black'
    },
});
