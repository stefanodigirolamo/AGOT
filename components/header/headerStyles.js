import {StyleSheet} from 'react-native';
import {colors} from '../../assets/styles/theme';

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.mattBlack,
    alignItems: 'center',
  },
  containerFilter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    width: 130,
    height: 75,
    marginTop: '8%',
  },
  containerImageInFilter: {
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20%',
    marginTop: '5%',
  },
  containerReset: {
    width: '15%',
    marginTop: '5%',
  },
});

export default headerStyles;
