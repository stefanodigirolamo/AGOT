import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
import background from '../assets/Throne.mp4'
import Header from '../components/header/Header';

const {height} = Dimensions.get('window')

export default Background = props => {
    return(
    <View style={styles.container}>
        <Header/>
        <Video
            source={background}
            muted={true}
            repeat={true}
            resizeMode={"cover"}
            rate={0.7}
            style={styles.video}
            ignoreSilentSwitch={"obey"}
        />
        {props.children}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        height: height,
        justifyContent: "center",
        alignItems: "center",
    },
    video: {
        position: 'absolute',
        width: '100%',
        height: height,
        opacity: 0.4
    }
});