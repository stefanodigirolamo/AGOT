import {StyleSheet, Platform, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    maxHeight: Platform.OS === 'ios' ? '30%' : '45%',
    paddingVertical: Platform.OS === 'android' ? '5%' : '2%',
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
    marginTop: '5%',
  },
  title: {
    fontSize: height > 800 ? 25 : 18,
    fontWeight: 'bold',
    color: '#ffc533',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  details: {
    fontSize: height > 800 ? 18 : 12,
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
