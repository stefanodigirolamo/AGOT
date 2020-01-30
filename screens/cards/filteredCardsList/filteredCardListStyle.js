import {StyleSheet} from 'react-native';
import {theme, colors} from '../../../assets/styles/theme';

const filteredCardListStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingTop: 40, // vedi per android
  },
  text: {
    fontSize: 20,
    color: theme.primary,
  },
  plotContainer: {
    marginVertical: '2.5%',
    marginHorizontal: '2%',
  },
  plotImageLess: {
    width: 330,
    height: 230,
  },
  plotImageMore: {
    width: 170,
    height: 100,
  },
  imageContainer: {
    marginVertical: '5%',
    marginHorizontal: '2%',
  },
  imageLess: {
    width: 250,
    height: 330,
  },
  imageMore: {
    width: 180,
    height: 260,
  },
});

export default filteredCardListStyle;
