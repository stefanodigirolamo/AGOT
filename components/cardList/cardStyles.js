import { StyleSheet, Dimensions, Platform } from 'react-native'

const { height } = Dimensions.get('window')

const cardStyles = StyleSheet.create({
    cardContainer: {
        paddingVertical: '2.5%',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
      },
      cardNameContainer: {
        marginLeft: '2%',
        width: '92%'
      },
      headerContainer: {
        backgroundColor: '#c2a67f',
        paddingVertical: '10%',
      },
      sectionHeader: {
        fontSize: height > 800 ? 25 : 18,
        color: '#ffc533',
      },
      cardName: {
        fontSize: height > 800 ? 25 : 18,
        color: '#c2a67f',
        fontWeight: Platform.OS === 'android' ? 'normal' : 'bold'
      },
      arrowContainer: {
          width: '8%'
      }
})

export default cardStyles