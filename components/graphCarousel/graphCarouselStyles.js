import {StyleSheet} from 'react-native';
import {theme, colors} from '../../assets/styles/theme';

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: theme.primary,
  },
  carouselContainer: {marginTop: 110},
  cardContainer: {
    height: 280,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: colors.black,
  },
  factionsCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeLinechart: {marginTop: 25},
  pieChart: {
    width: '50%',
    paddingLeft: '5%',
    marginTop: '10%',
  },
  containerTextPiedChart: {
    width: '50%',
    marginTop: '20%',
  },
  costText: {
    color: theme.secondary,
    fontWeight: 'bold',
    marginLeft: '2%',
    marginTop: '5%',
  },
  costStrengthChart: {
    marginTop: 15,
    alignSelf: 'center',
    marginRight: 35,
  },
  dotsContainer: {height: '16%'},
});

export default styles;
