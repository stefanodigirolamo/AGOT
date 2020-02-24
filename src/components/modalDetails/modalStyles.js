import {StyleSheet} from 'react-native';
import {theme} from '../../../assets/styles/theme';

const modalStyles = StyleSheet.create({
  spinner: {marginTop: '100%'},
  container: {
    flex: 1,
  },
  deckDetailsContainer: {
    justifyContent: 'flex-end',
  },
  decksContainer: {flex: 3},
  packsContainer: {flex: 1},
  packDetailsContainer: {
    maxHeight: '30%',
    marginTop: '8%',
  },
  packImageContainer: {
    width: '35%',
  },
  titlePackContainer: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  packTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.primary,
    marginTop: '5%',
  },
  deckTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.primary,
    textAlign: 'center',
    marginTop: '10%',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  headerItemsPackContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  dateContainer: {justifyContent: 'flex-end'},
  dateCreationDeck: {
    textAlign: 'right',
    marginRight: '2%',
    fontSize: 15,
    color: theme.primary,
  },
  details: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.primary,
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10,
  },
});

export default modalStyles;
