import {StyleSheet, Dimensions, Platform} from 'react-native';
import {theme, colors} from '../../../assets/styles/theme';

const {height} = Dimensions.get('window');

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mattBlack,
  },
  decklistContainer:
    height > 800
      ? {
          flex: 3,
          marginBottom: '2%',
        }
      : {
          flex: 1,
        },
  packListContainer: {
    flex: height > 800 ? 3 : 1,
    marginTop: height > 800 ? '5%' : '0%',
  },
  decklistTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginVertical: Platform.OS === 'android' ? '4%' : '4%',
  },
  packListTitle: {
    color: theme.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginVertical: Platform.OS === 'android' ? '5%' : '5%',
  },
  singlePacksContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    color: theme.secondary,
    marginTop: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: theme.secondary,
  },
  warningContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: '25%',
  },
  messageWarning: {
    fontSize: 14,
    color: theme.secondary,
  },
});

export default homeStyles;
