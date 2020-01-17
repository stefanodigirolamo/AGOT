import {StyleSheet} from 'react-native';

const CardDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardImageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  cardImage: {
    width: '50%',
    height: '50%',
    marginVertical: '10%',
    borderRadius: 10,
  },
});

export default CardDetailsStyle;
