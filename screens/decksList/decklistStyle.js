import {StyleSheet} from 'react-native';
import {colors} from '../../assets/styles/theme';

const decklistStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mattBlack,
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

export default decklistStyles;
