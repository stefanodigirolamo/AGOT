import {StyleSheet} from 'react-native';
import {theme, colors} from '../../assets/styles/theme';

const cardStyles = StyleSheet.create({
  cardContainer: {
    paddingVertical: '2.5%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.black,
  },
  cardNameContainer: {
    marginLeft: '2%',
    width: '92%',
  },
  headerContainer: {
    backgroundColor: theme.secondary,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cardName: {
    fontSize: 18,
    color: theme.secondary,
    fontWeight: 'bold',
  },
  separator: {height: 0.5, backgroundColor: theme.secondary},
  arrowContainer: {
    width: '8%',
  },
});

export default cardStyles;
