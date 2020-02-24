import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header/Header';
import myDecksStyles from './myDeckStyles';

const styles = myDecksStyles;

const MyDecks = () => {
  return (
    <>
      <Header />

      <View style={styles.container}>
        <Text style={styles.text}>My Decks</Text>
      </View>
    </>
  );
};

export default MyDecks;
