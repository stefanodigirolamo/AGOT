import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {theme} from '../../assets/styles/theme';
import styles from './spinnerStyles';

const Spinner = ({spinnerStyles}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={theme.primary}
        style={spinnerStyles}
      />
    </View>
  );
};

export default Spinner;
