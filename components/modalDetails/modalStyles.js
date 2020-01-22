import {StyleSheet, Platform} from 'react-native';

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deckDetailsContainer: {
    maxHeight: '30%',
    paddingBottom: '8%',
  },
  packDetailsContainer: {
    maxHeight: '30%',
    paddingTop: Platform.OS === 'ios' ? '15%' : '6%',
    paddingBottom: Platform.OS === 'ios' ? '5%' : '7%',
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
    paddingVertical: '5%',
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
});

export default modalStyles;
