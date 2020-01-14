import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DecksList = () => (
  <View style={styles.container}>
    <Text style={styles.text}>DecksList</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

export default DecksList;
