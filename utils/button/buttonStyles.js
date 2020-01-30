import {StyleSheet} from 'react-native';

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    borderRadius: 20,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default buttonStyles;
