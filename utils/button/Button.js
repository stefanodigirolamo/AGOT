import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import buttonStyles from './buttonStyles';

const styles = buttonStyles;

const Button = ({press, bgColor, fontColor, height, width, buttonTitle}) => {
  return (
    <TouchableOpacity onPress={() => press()} style={{marginTop: '10%'}}>
      <View
        style={[
          styles.buttonContainer,
          {backgroundColor: bgColor, height: height, width: width},
        ]}>
        <Text style={[styles.buttonText, {color: fontColor}]}>
          {buttonTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
