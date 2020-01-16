import { StyleSheet } from 'react-native'

const deckStyles = StyleSheet.create({
    cardContainer: {
        marginVertical: '2%',
        marginHorizontal: 10,        
    },
    background: {
        opacity: 0.4,
        borderRadius: 8
    },
    titleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
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
        marginTop: '5%',
        textDecorationLine: 'underline'
    }
})

export default deckStyles