import {StyleSheet, Dimensions} from 'react-native';
import {theme, colors} from '../../../assets/styles/theme';

const filteredCardListStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerContainer: {
    flex: 1,
  },
  headerItem: {
    justifyContent: 'center',
    height: '50%',
    borderWidth: 2,
    borderColor: theme.primary,
    borderRadius: 8,
    margin: 20,
  },
  appliedFilters: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.primary,
  },
  noCardsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNoCards: {
    fontSize: 30,
    color: theme.primary,
  },
  cardContainer: {
    marginVertical: '5%',
    alignItems: 'center',
  },
  plotImage: {
    width: 330,
    height: 230,
  },
  cards: {
    width: 250,
    height: 350,
  },
});

export default filteredCardListStyle;
