import {StyleSheet, Platform, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deckDetailsContainer: {
    maxHeight: '30%',
    paddingVertical: Platform.OS === 'ios' ? '2%' : '5%',
  },
  packDetailsContainer: {
    maxHeight: '30%',
    paddingVertical: Platform.OS === 'ios' ? '0%' : '5%',
    paddingTop: Platform.OS === 'ios' ? '15%' : '0%',
    paddingBottom: Platform.OS === 'ios' ? '5%' : '0%',
  },
  imageContainer: {
    width: '35%',
  },
  titleContainer: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckNameContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: '5%',
  },
  headerItemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffc533',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    marginTop: '5%',
  },
  details: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffc533',
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10,
  },
  buttonContainer: {
    display: 'flex',
    borderRadius: 20,
    height: '50%',
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000C9',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#c2a67f',
  },
});

export default modalStyles;
