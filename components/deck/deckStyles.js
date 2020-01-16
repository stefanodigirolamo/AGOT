import {StyleSheet} from 'react-native';

const deckStyles = StyleSheet.create({
  cardContainer: {
    marginVertical: '2%',
    marginHorizontal: 20,
  },
  background: {
    opacity: 0.4,
    borderRadius: 8,
  },
  detailContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '90%',
  },
  arrowContainer: {
    width: '10%',
  },
  title: {
    fontSize: 15,
    color: '#c2a67f',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#c2a67f',
    marginTop: '5%',
    textDecorationLine: 'underline',
  },
});

export default deckStyles;
