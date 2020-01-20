import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const cardsFilters = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}> Filters </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 30,
    color: '#fefefe',
  },
});

export default cardsFilters;
