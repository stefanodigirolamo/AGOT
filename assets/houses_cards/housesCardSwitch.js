import React from 'react';
import {Image} from 'react-native';
import Baratheon from './baratheon_card.png';
import Greyjoy from './greyjoy_card.png';
import Lannister from './lannister_card.png';
import Martell from './martell_card.png';
import Stark from './stark_card.png';
import Targaryen from './targaryen_card.png';
import NightsWatch from './thenightswatch_card.png';
import Tyrell from './tyrell_card.png';

const factionCardSwitch = ({factionName, width, height}) => {
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
    default:
      return null;
  }
};

export default factionCardSwitch;
