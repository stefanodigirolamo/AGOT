import {StyleSheet, Platform, Dimensions} from 'react-native';

const { height } = Dimensions.get('window')

const deckStyles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 20,
    zIndex: 1,
    elevation: 1,
  },
  newDeckIconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
    top: 10,
    right: 10,
    zIndex: 2,
    elevation: 2,
  },
  detailContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000C1',
  },
  titleContainer: {
    paddingVertical: '5%',
    paddingHorizontal: '3%',
    flexDirection: 'column',
    width: '90%',
  },
  arrowContainer: {
    width: '10%',
  },
  title: {
    fontSize: 15,
    color: '#c2a67f',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#c2a67f',
    marginTop: height > 800 ? '5%' : '2%',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
});

export default deckStyles;
