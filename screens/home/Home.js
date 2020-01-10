import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Background from '../../utils/Background';

export default Home = () => (
    <Background>
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>
                    Home
                </Text>
            </ScrollView>
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