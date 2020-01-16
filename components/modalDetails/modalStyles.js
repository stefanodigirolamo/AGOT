import {StyleSheet} from 'react-native';

const modalStyles = StyleSheet.create({
  detailsContainer: {
    paddingVertical: '5%',
  },
  imageContainer: {
    width: '50%',
  },
  titleContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
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
  },
});

export default modalStyles;
