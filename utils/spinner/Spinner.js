import React from 'react';
import SpinnerStyle from './SpinnerStyle';
import {ActivityIndicator, View} from 'react-native';
import {theme} from '../../assets/styles/theme';

const Spinner = () => {
  const styles = SpinnerStyle;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
};

export default Spinner;
