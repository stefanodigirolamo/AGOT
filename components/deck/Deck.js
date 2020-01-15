import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Deck = ({ name, faction, navigation }) => {
    const openModal = () => {

    }
    
    return (
        <TouchableOpacity /* onPress={} */ style={styles.CardContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{faction}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: '#3e3e3e',
        borderRadius: 6,
        marginVertical: 10,
    },
    titleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: '#fefefe'
    }
})

export default Deck