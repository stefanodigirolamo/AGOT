import React from 'react';
import {Text, View, StyleSheet, Picker} from 'react-native';
import Button from '../../../utils/button/Button';

const cardsFilters = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Type </Text>
      </View>
      <View style={styles.pickersContainer}>
        <Picker style={styles.input}>
          <Picker.Item value="ciao" label="ciao" />
          <Picker.Item value="buongiorno" label="buongiorno" />
          <Picker.Item value="buonasera" label="buonasera" />
        </Picker>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Faction </Text>
      </View>
      <View style={styles.pickersContainer}>
        <Picker style={styles.input}>
          <Picker.Item value="ciao" label="ciao" />
          <Picker.Item value="buongiorno" label="buongiorno" />
          <Picker.Item value="buonasera" label="buonasera" />
        </Picker>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Cost </Text>
      </View>
      <View style={styles.pickersContainer}>
        <Picker style={styles.input}>
          <Picker.Item value="ciao" label="ciao" />
          <Picker.Item value="buongiorno" label="buongiorno" />
          <Picker.Item value="buonasera" label="buonasera" />
        </Picker>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Strength </Text>
      </View>
      <View style={styles.pickersContainer}>
        <Picker style={styles.input}>
          <Picker.Item value="ciao" label="ciao" />
          <Picker.Item value="buongiorno" label="buongiorno" />
          <Picker.Item value="buonasera" label="buonasera" />
        </Picker>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Challenges </Text>
      </View>
      <View style={styles.pickersContainer}>
        <Picker style={styles.input}>
          <Picker.Item value="ciao" label="ciao" />
          <Picker.Item value="buongiorno" label="buongiorno" />
          <Picker.Item value="buonasera" label="buonasera" />
        </Picker>
      </View>
      <Button
        bgColor="#ffc533"
        height="30%"
        width={280}
        buttonTitle="Search"
        fontColor="#000000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: '3%',
  },
  title: {
    color: '#ffc533',
    fontSize: 25,
  },
  pickersContainer: {
    borderWidth: 2,
    borderColor: '#c2a67f',
    borderRadius: 4,
    width: 280,
    marginVertical: '3%',
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 280,
    color: '#c2a67f',
  },
});

export default cardsFilters;
