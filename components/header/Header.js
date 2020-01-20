import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import AGOTLogo from '../../assets/gotLogo.png';

const {height} = Dimensions.get('window');

const Header = () => (
  <View style={styles.container}>
    <Image source={AGOTLogo} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container:
    height > 800
      ? {
          backgroundColor: '#000000CD',
          alignItems: 'center',
        }
      : {
          backgroundColor: '#000000CD',
          alignItems: 'center',
          height: 95,
        },
  image: {
    width: 130,
    height: 75,
    marginTop: '8%',
  },
});

export default Header;
