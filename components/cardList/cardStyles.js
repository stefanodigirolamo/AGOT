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