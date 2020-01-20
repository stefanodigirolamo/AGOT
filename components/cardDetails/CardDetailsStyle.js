import {StyleSheet} from 'react-native';

const CardDetailsStyle = StyleSheet.create({
  cardTitle: {
    fontSize: 25,
    color: '#ffc533',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  cardImage: {
    width: '60%',
    height: 240,
    marginVertical: '5%',
    marginHorizontal: '20%',
    borderRadius: 10,
  },
  cardDescriptions: {
    fontSize: 15,
    color: '#c2a67f',
    marginVertical: '3%',
    marginHorizontal: '5%',
  },
  modalContainer: {
    backgroundColor: '#000000CC',
    width: '100%',
    height: '100%',
  },
  modalImageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    marginVertical: '7%',
    borderRadius: 10,
  },
});

export default CardDetailsStyle;
