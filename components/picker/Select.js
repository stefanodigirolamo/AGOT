import React from 'react';
import {Text, View, StyleSheet, Picker, TextInput} from 'react-native';

const Select = ({title, itemName, number}) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {title} </Text>
      </View>
      <View style={number && styles.smallPickersContainer}>
        <View style={[styles.pickersContainer, number && {marginRight: '5%'}]}>
          <Picker style={number ? styles.smallPicker : styles.picker}>
            {itemName.map(item => (
              <Picker.Item value={item} label={item} key={item} />
            ))}
          </Picker>
        </View>

        {number && (
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: '3%',
  },
  title: {
    color: '#ffc533',
    fontSize: 25,
  },
  smallPickersContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  pickersContainer: {
    borderWidth: 2,
    borderColor: '#c2a67f',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '6%',
  },
  smallPicker: {
    height: 35,
    width: 120,
    color: '#c2a67f',
  },
  picker: {
    height: 35,
    width: 280,
    color: '#c2a67f',
  },
  textInputContainer: {
    height: 40,
    color: '#c2a67f',
    display: 'flex',
    alignItems: 'flex-end',
    marginLeft: '5%',
  },
  textInput: {
    color: '#c2a67f',
    borderWidth: 2,
    borderColor: '#c2a67f',
    borderRadius: 4,
    width: 120,
  },
});

export default Select;
