import {StyleSheet} from 'react-native';
import {theme, colors} from '../../../assets/styles/theme';

const filteredCardListStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  headerItem: {
    borderWidth: 2,
    borderColor: theme.primary,
    margin: 10,
    padding: 5,
  },
  appliedFilters: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.primary,
  },
  cardsContainer: {
    flex: 1,
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
