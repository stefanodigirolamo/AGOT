import {StyleSheet} from 'react-native';

const CardDetailsStyle = StyleSheet.create({
  topDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardImageContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '55%',
    height: '55%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    marginVertical: '10%',
    borderRadius: 10,
  },
  firstDetailsContainer: {
    marginVertical: '7%',
    width: '45%',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 25,
    color: '#ffc533',
  },
  cardDescriptions: {
    fontSize: 15,
    color: '#c2a67f',
    marginVertical: '8%',
  },
  modalContainer: {
    backgroundColor: '#000000',
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
  closeModalIconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: '5%',
    marginRight: '3%',
  },
});

export default CardDetailsStyle;
