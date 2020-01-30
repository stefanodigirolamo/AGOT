import {StyleSheet} from 'react-native';
import {theme, colors} from '../../assets/styles/theme';

const selectStyles = StyleSheet.create({
  pickersContainer: {
    borderWidth: 2,
    borderColor: theme.secondary,
    borderRadius: 4,
  },
  title: {
    color: theme.primary,
    fontSize: 25,
  },
  modalHeader: {
    backgroundColor: theme.primary,
  },
  smallPicker: {
    //vedi commenti per ios
    // height: 20,
    width: 120,
    // paddingTop: '4%',
  },
  picker: {
    width: 280,
    // paddingVertical: height > 800 ? '10%' : '6%',
  },
  factionLogoContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  factionLogo: {
    borderWidth: 2,
    borderColor: colors.black,
  },
});

export default selectStyles;
