import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    borderRadius: 20,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Button;
