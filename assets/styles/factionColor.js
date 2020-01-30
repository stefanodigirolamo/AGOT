import propTypes from 'prop-types';

const factionColorSwitch = factionName => {
  switch (factionName) {
    case 'House Baratheon': {
      return '#e3d852cc';
    }
    case 'House Greyjoy': {
      return '#1d7a99cc';
    }
    case 'House Lannister': {
      return '#63100a';
    }
    case 'House Martell': {
      return '#e89521cc';
    }
    case 'House Stark': {
      return '#cfcfcfcc';
    }
    case 'House Targaryen': {
      return '#b52b21cc';
    }
    case "The Night's Watch": {
      return '#7a7a7acc';
    }
    case 'House Tyrell': {
      return '#509f16cc';
    }
    case 'Neutral': {
      return '#a99560cc';
    }
    default:
      return null;
  }
};

factionColorSwitch.propTypes = {
  factionLogo: propTypes.string.isRequired,
};

export default factionColorSwitch;
