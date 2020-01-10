import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../utils/Background';

export default DecksList = () =>
    (
        <Background>
            <View style={styles.container}>
                <Text style={styles.text}>
                    DecksList
                </Text>
            </View>
        </Background>
    )

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        color: 'red',
    }
})