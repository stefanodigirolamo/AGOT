import { StyleSheet } from 'react-native'

const deckStyles = StyleSheet.create({
    cardContainer: {
        marginVertical: '2%',
        marginHorizontal: 20,        
    },
    background: {
        opacity: 0.4
    },
    titleContainer: {
        paddingVertical: 30,
        paddingHorizontal: 30,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 15,
        color: '#c2a67f',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#c2a67f',
        marginTop: '5%'
    }
})

export default deckStyles