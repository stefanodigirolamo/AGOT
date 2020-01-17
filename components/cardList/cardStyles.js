import { StyleSheet } from 'react-native'

const cardStyles = StyleSheet.create({
    cardContainer: {
        marginVertical: '5%',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
      },
      cardNameContainer: {
        marginLeft: '2%',
        width: '90%'
      },
      headerContainer: {
        backgroundColor: '#c2a67f',
        paddingVertical: '10%',
      },
      sectionHeader: {
        fontSize: 25,
        color: '#ffc533',
      },
      cardName: {
        fontSize: 25,
        color: '#c2a67f',
        fontWeight: 'bold'
      },
      arrowContainer: {
          width: '10%',
      }
})

export default cardStyles