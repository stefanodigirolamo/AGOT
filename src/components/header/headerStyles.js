import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/theme';

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
    width: '79%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '21%',
    marginTop: '7%',
  },
  containerReset: {
    width: '21%',
    marginTop: '10%',
  },
});

export default headerStyles;
