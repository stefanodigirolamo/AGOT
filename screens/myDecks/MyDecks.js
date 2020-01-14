import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyDecks = () => (
  <View style={styles.container}>
    <Text style={styles.text}>My Decks</Text>
  </View>
);

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

export default MyDecks;
