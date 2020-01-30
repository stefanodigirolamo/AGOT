import React from 'react';
import {Dimensions} from 'react-native';
import Video from 'react-native-video';
import background from '../../assets/Throne.mp4';
import backgroundStyles from './backgroundStyles';

const styles = backgroundStyles;
const {height} = Dimensions.get('window');

const Background = () => {
  return (
    <Video
      source={background}
      muted={true}
      repeat={true}
      resizeMode={'cover'}
      rate={0.7}
      style={[styles.video, {height: height}]}
      ignoreSilentSwitch={'obey'}
    />
  );
};
export default Background;
