import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/theme';

const CardsStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.mattBlack,
  },
  keyboard: {flexGrow: 1, height: '100%'},
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10%',
  },
});

export default CardsStyle;
