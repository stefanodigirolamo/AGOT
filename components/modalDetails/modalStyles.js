import {StyleSheet, Platform} from 'react-native';

const modalStyles = StyleSheet.create({
  detailsContainer: {
    maxHeight: Platform.OS === 'ios' ? '25%' : '40%',
    paddingVertical: Platform.OS === 'android' ? '10%' : '5%',
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
    fontSize: 25,
    color: '#ffc533',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  details: {
    fontSize: 15,
    color: '#ffc533',
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10,
  },
  buttonContainer: {
    marginTop: '20%',
  }
});

export default modalStyles;
