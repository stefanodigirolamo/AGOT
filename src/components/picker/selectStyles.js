import {StyleSheet} from 'react-native';
import {theme, colors} from '../../../assets/styles/theme';

const selectStyles = StyleSheet.create({
  container: {alignItems: 'center'},
  pickerContainer: {
    borderWidth: 2,
    borderColor: theme.secondary,
    borderRadius: 4,
    width: 300,
  },
  headerBackButton: {
    color: colors.black,
    fontWeight: 'bold',
  },
  headerTitle: {fontSize: 25},
  item: {height: 80},
  itemText: {color: theme.primary, fontSize: 25},
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
  iosIcon: {color: theme.primary, fontSize: 25, right: 10},
  checkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singleCheck: {
    marginHorizontal: '2%',
  },
  checkText: {color: theme.secondary, fontSize: 20},
  numericInputContainer: {
    flexDirection: 'row',
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
