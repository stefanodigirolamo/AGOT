import {StyleSheet} from 'react-native';
import {theme, colors} from '../../../assets/styles/theme';

const cardStyles = StyleSheet.create({
  cardContainer: {
    paddingVertical: '2.5%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.black,
  },
  cardNameContainer: {
    marginLeft: '4%',
    width: '90%',
  },
  headerContainer: {
    backgroundColor: theme.secondary,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: '2%',
  },
  cardName: {
    fontSize: 18,
    color: theme.secondary,
    fontWeight: 'bold',
  },
  separator: {height: 0.5, backgroundColor: theme.secondary},
  arrowContainer: {
    width: '10%',
  },
});

export default cardStyles;
