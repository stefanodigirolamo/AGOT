import {StyleSheet} from 'react-native';
import {theme, colors} from '../../assets/styles/theme';

const selectStyles = StyleSheet.create({
  pickersContainer: {
    borderWidth: 2,
    borderColor: theme.secondary,
    borderRadius: 4,
    width: 300,
  },
  title: {
    color: theme.primary,
    fontSize: 25,
    textAlign: 'center',
  },
  downArrow: {
    color: theme.primary,
    fontSize: 25,
    right: 12,
    top: 12,
    position: 'absolute',
  },
  factionLogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: '15%',
  },
  factionLogo: {
    borderWidth: 2,
    borderColor: colors.black,
    width: '30%',
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: '2%',
  },
});

export default selectStyles;
