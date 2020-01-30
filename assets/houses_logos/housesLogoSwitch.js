import React from 'react';
import {Image} from 'react-native';
import Baratheon from './house_baratheon.png';
import Greyjoy from './house_greyjoy.png';
import Lannister from './house_lannister.png';
import Martell from './house_martell.png';
import Stark from './house_stark.png';
import Targaryen from './house_targaryen.png';
import NightsWatch from './house_nights_watch.png';
import Tyrell from './house_tyrell.png';
import Neutral from './neutral.png';

const factionLogoSwitch = ({factionName, width, height}) => {
  switch (factionName) {
    case 'House Baratheon': {
      return (
        <Image source={Baratheon} style={{width: width, height: height}} />
      );
    }
    case 'House Greyjoy': {
      return <Image source={Greyjoy} style={{width: width, height: height}} />;
    }
    case 'House Lannister': {
      return (
        <Image source={Lannister} style={{width: width, height: height}} />
      );
    }
    case 'House Martell': {
      return <Image source={Martell} style={{width: width, height: height}} />;
    }
    case 'House Stark': {
      return <Image source={Stark} style={{width: width, height: height}} />;
    }
    case 'House Targaryen': {
      return (
        <Image source={Targaryen} style={{width: width, height: height}} />
      );
    }
    case "The Night's Watch": {
      return (
        <Image source={NightsWatch} style={{width: width, height: height}} />
      );
    }
    case 'House Tyrell': {
      return <Image source={Tyrell} style={{width: width, height: height}} />;
    }
    case 'Neutral': {
      return <Image source={Neutral} style={{width: width, height: height}} />;
    }
    default:
      return null;
  }
};

export default factionLogoSwitch;
