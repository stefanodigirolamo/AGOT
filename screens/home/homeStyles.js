import { StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000C9',
    },
    listsContainer: {
      flex: 3,
    },
    listsTitle: {
      color: '#ffc533',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: '5%',
      marginVertical: Platform.OS === 'android' ? '9%' : '8%',
    },
    packsListsTitleContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: '5%'
    },
    singlePacksContainer: {
      alignItems: 'center',
      marginHorizontal: 20,
    },
    title: {
      fontSize: 15,
      color: '#c2a67f',
      marginTop: 10,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 15,
      color: '#c2a67f',
    },
    errorContainer: {
      display: 'flex',
      alignItems: 'center',
      marginVertical: '25%'
    },
    messageError: {
      fontSize: 18,
      color: '#c2a67f',
    }
  });

  export default homeStyles