import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {theme} from '../../assets/styles/theme';

const Spinner = ({styles}) => {
  return (
    <View style={styles}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
};

export default Spinner;
