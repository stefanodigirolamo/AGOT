import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import gotLogo from '../../assets/gotLogo.png'

export default Header = () => (
    <View style={styles.container}>
        <Image
            source={gotLogo}
            style={styles.image}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    image: { 
        width: 130,
        height: 80,
        marginTop: '8%'
    }
})
