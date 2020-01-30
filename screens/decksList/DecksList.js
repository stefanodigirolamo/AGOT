import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header/Header';
import decklistStyles from './decklistStyle';

const styles = decklistStyles;

const DecksList = () => {
  return (
    <>
      <Header />

      <View style={styles.container}>
        <Text style={styles.text}>DeckList</Text>
      </View>
    </>
  );
};

export default DecksList;
