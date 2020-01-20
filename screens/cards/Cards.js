import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/header/Header';

const Cards = () => {
  return (
    <>
      <Header />

      <View style={styles.container}>
        <Text style={styles.text}>Cards</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000C9',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

export default Cards;
