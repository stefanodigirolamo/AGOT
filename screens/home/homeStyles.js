import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height } = Dimensions.get('window')

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000C9',
  },
  decklistContainer:
    height > 800 ?
      {
        flex: 3,
        marginBottom: '2%',
      } :
      {
        flex: 1
      },
  packListContainer: {
    flex: height > 800 ? 3 : 1,
    marginTop: height > 800 ? '5%' : '0%'
  },
  decklistTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffc533',
    fontSize: height > 800 ? 25 : 20,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginVertical: Platform.OS === 'android' ? '4%' : '4%',
  },
  packListTitle: {
    color: '#ffc533',
    fontSize: height > 800 ? 25 : 20,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginVertical: Platform.OS === 'android' ? '5%' : '5%',
  },
  singlePacksContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: height > 800 ? 18 : 16,
    color: '#c2a67f',
    marginTop: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: height > 800 ? 18 : 16,
    color: '#c2a67f',
  },
  warningContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: '25%',
  },
  messageWarning: {
    fontSize: height > 800 ? 20 : 14,
    color: '#c2a67f',
  },
});

export default homeStyles;
