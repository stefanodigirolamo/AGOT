import {StyleSheet} from 'react-native';

const cardStyles = StyleSheet.create({
  cardContainer: {
    paddingVertical: '2.5%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardNameContainer: {
    marginLeft: '2%',
    width: '92%',
  },
  headerContainer: {
    backgroundColor: '#c2a67f',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffc533',
  },
  cardName: {
    fontSize: 18,
    color: '#c2a67f',
    fontWeight: 'bold',
  },
  arrowContainer: {
    width: '8%',
  },
});

export default cardStyles;
