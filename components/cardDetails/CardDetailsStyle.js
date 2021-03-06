import {StyleSheet, Platform} from 'react-native';

const CardDetailsStyle = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? '10%' : '3%',
    marginBottom: '2%',
  },
  iconContainer: {
    display: 'flex',
    width: '20%',
    alignItems: 'center',
  },
  cardNameContainer: {
    display: 'flex',
    width: '80%',
    alignItems: 'flex-start',
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#000000',
    marginVertical: '5%',
    fontWeight: 'bold',
  },
  cardImage: {
    marginTop: '10%',
    marginBottom: '5%',
    marginHorizontal: '20%',
  },
  cardDescriptions: {
    fontSize: 20,
    color: '#c2a67f',
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  modalContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    marginVertical: '7%',
  },
});

export default CardDetailsStyle;
