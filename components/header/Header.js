import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Image source={require('../../assets/gotLogo.png')} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 80,
    marginTop: '8%',
  },
});

export default Header;
