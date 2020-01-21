import React from 'react';
import propTypes from 'prop-types';
import {StyleSheet, Image} from 'react-native';
import Baratheon from './house_baratheon.png';
import Arryn from './house_arryn.png';
import Greyjoy from './house_greyjoy.png';
import Lannister from './house_lannister.png';
import Martell from './house_martell.png';
import Stark from './house_stark.png';
import Targaryen from './house_targaryen.png';
import Tully from './house_tully.png';
import Tyrell from './house_tyrell.png';
import Neutral from './house_neutral.png';

const factionLogoSwitch = props => {
  const {factionLogo} = props;

  switch (factionLogo) {
    case 'House Baratheon':
      return <Image source={Baratheon} style={styles.imageStyle} />;
    case 'House Arryn':
      return <Image source={Arryn} style={styles.imageStyle} />;
    case 'House Greyjoy':
      return <Image source={Greyjoy} style={styles.imageStyle} />;
    case 'House Lannister':
      return <Image source={Lannister} style={styles.imageStyle} />;
    case 'House Martell':
      return <Image source={Martell} style={styles.imageStyle} />;
    case 'House Stark':
      return <Image source={Stark} style={styles.imageStyle} />;
    case 'House Targaryen':
      return <Image source={Targaryen} style={styles.imageStyle} />;
    case 'House Tully':
      return <Image source={Tully} style={styles.imageStyle} />;
    case 'House Tyrell':
      return <Image source={Tyrell} style={styles.imageStyle} />;
    //controlla name no house
    case 'Neutral':
      return <Image source={Neutral} style={styles.imageStyle} />;
    default:
      return null;
  }
};

factionLogoSwitch.propTypes = {
  factionLogo: propTypes.string.isRequired,
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 125,
    height: 140,
  },
});
export default factionLogoSwitch;
