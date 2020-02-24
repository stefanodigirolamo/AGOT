import {StyleSheet} from 'react-native';
import {colors, theme} from '../../../assets/styles/theme';

const decklistStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.mattBlack,
  },
  spinner: {marginTop: '80%'},
  detailsContainer: {alignItems: 'center'},
  houseCardContainer: {paddingVertical: '6%'},
  title: {
    fontSize: 20,
    color: theme.primary,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    color: theme.secondary,
  },
  date: {
    fontSize: 15,
    color: theme.secondary,
    textAlign: 'right',
    paddingTop: '3%',
    paddingRight: '3%',
  },
  cardBox: {
    backgroundColor: colors.mattBlack,
    borderWidth: 1,
    borderColor: theme.primary,
    borderRadius: 20,
    width: 330,
    marginVertical: 25,
    paddingVertical: '4%',
    paddingHorizontal: '2%',
  },
  joust_melee_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '4%',
  },
  joustColor: {color: '#0B6623'},
  meleeColor: {color: '#C21807'},
  joust_melee_text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default decklistStyles;
