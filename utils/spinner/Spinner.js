import React from 'react';
import SpinnerStyle from './SpinnerStyle';
import {ActivityIndicator, View} from 'react-native';

const Spinner = () => {
  const styles = SpinnerStyle;

  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} color="#ffc533" />
    </View>
  );
};

export default Spinner;
