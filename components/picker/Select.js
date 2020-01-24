import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {Picker} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height} = Dimensions.get('window');

const Select = ({
  title,
  itemsName,
  itemValue,
  getValue,
  textValue,
  setTextValue,
  number,
  placeholder,
}) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {title} </Text>
      </View>

      <View style={number && styles.smallPickersContainer}>
        <View style={[styles.pickersContainer, number && {marginRight: '5%'}]}>
          <Picker
            headerStyle={styles.modalHeader}
            headerBackButtonTextStyle={{color: '#000000', fontWeight: 'bold'}}
            headerTitleStyle={{fontSize: 25}}
            itemStyle={{height: 80}}
            itemTextStyle={{color: '#ffc533', fontSize: 25}}
            placeholder={Platform.OS === 'ios' ? placeholder : null}
            placeholderStyle={{color: '#C2A67F'}}
            placeholderIconColor="#ffc533"
            modalStyle={{backgroundColor: '#000000'}}
            selectedValue={itemValue}
            onValueChange={item => getValue(item)}
            iosIcon={
              <Icon
                name="chevron-down"
                style={{color: '#ffc533', fontSize: 25}}
              />
            }
            textStyle={{color: '#C2A67F'}}
            style={number ? styles.smallPicker : styles.picker}>
            {itemsName.map(item => (
              <Picker.Item value={item} label={item} key={item} />
            ))}
          </Picker>
        </View>
        {number && (
          <TextInput
            selectionColor="#ffc533"
            value={textValue}
            onChangeText={text => setTextValue(text)}
            style={styles.textInput}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    // paddingVertical: '6%',
  },
  title: {
    color: '#ffc533',
    fontSize: 25,
    paddingVertical: height > 800 ? '6%' : '4.5%',
  },
  smallPickersContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
  },
  pickersContainer: {
    borderWidth: 2,
    borderColor: '#C2A67F',
    borderRadius: 4,
  },
  smallPicker: {
    height: 40,
    width: 120,
    paddingTop: '6%',
    color: '#C2A67F',
  },
  picker: {
    width: 280,
    paddingVertical: height > 800 ? '10%' : '8%',
    color: '#C2A67F',
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c2a67f',
    borderWidth: 2,
    borderColor: '#c2a67f',
    borderRadius: 4,
    width: 120,
    height: 50,
    marginLeft: '6%',
    paddingLeft: '20%',
  },
  modalHeader: {
    backgroundColor: '#ffc533',
  },
});

export default Select;
