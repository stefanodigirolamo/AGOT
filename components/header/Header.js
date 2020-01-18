import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AGOTLogo from '../../assets/gotLogo.png'

const Header = () => (
  <View style={styles.container}>
    <Image source={AGOTLogo} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000CD',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 80,
    marginTop: '8%',
  },
});

export default Header;
