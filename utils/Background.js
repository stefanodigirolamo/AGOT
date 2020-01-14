import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import background from '../assets/Throne.mp4';

const {height} = Dimensions.get('window');

const Background = props => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={background}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={0.7}
          style={styles.video}
          ignoreSilentSwitch={'obey'}
        />
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000C9',
  },
  videoContainer: {
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: height,
  },
});

export default Background;
