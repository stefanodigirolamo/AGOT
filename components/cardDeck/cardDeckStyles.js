import {StyleSheet} from 'react-native';

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
<<<<<<< HEAD
    paddingVertical: '2%',
    paddingHorizontal: 10,
=======
    paddingVertical: '1%',
    paddingHorizontal: '3%',
>>>>>>> d2f95d50cf3a85552cc9b97884dd310c622f1ad7
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
    marginTop: '5%',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
});

export default deckStyles;
