import React, {useState} from 'react';
import CardsStyle from './CardsStyle';
import {View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import Header from '../../components/header/Header';
import Select from '../../components/picker/Select';
import Button from '../../utils/button/Button';

const Cards = ({navigation}) => {
  const styles = CardsStyle;

  const [value, setValue] = useState({
    type: '',
    faction: '',
    cost: null,
    strength: null,
    challenges: {challenge: '', boolean: false},
  });

  const valueObj = {
    type: '',
    faction: '',
    cost: '',
    strength: '',
    challenges: {challenge: '', boolean: false},
  };

  const typeItemsArray = [
    '',
    'Agenda',
    'Attachment',
    'Character',
    'Plot',
    'Event',
    'Location',
  ];
  const factionItemsArray = [
    '',
    'House Baratheon',
    'House Greyjoy',
    'House Lannister',
    'House Martell',
    'House Stark',
    'House Targaryen',
    "The Night's Watch",
    'House Tyrell',
    'Neutral',
  ];
  const challengesItemsArray = ['', 'is_military', 'is_intrigue', 'is_power'];

  const setTypeValue = item => {
    valueObj.type = item;
    setValue({...value, type: valueObj.type});
  };

  const setFactionValue = item => {
    valueObj.faction = item;
    setValue({...value, faction: valueObj.faction});
  };

  const setCostNumber = item => {
    valueObj.cost = item;
    setValue({...value, cost: valueObj.cost});
  };

  const setStrengthNumber = item => {
    valueObj.strength = item;
    setValue({...value, strength: valueObj.strength});
  };

  const setChallengesValue = item => {
    valueObj.challenges.challenge = item;
    setValue({
      ...value,
      challenges: {challenge: valueObj.challenges.challenge, boolean: true},
    });
  };

  const onSearch = (type, faction, valueCost, valueStrength, challenges) => {
    navigation.navigate('Filtered', {
      type,
      faction,
      valueCost,
      valueStrength,
      challenges,
    });
  };

  return (
    <>
      <Header />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
            style={{flexGrow: 1, height: '100%'}}>
            <Select
              title="Type"
              itemsName={typeItemsArray}
              getValue={setTypeValue}
              itemValue={value.type}
            />
            <Select
              title="Faction"
              itemsName={factionItemsArray}
              getValue={setFactionValue}
              itemValue={value.faction}
            />

            <Select
              title="Cost"
              number
              numberValue={value.cost}
              setNumberValue={setCostNumber}
            />
            <Select
              title="Strenght"
              number
              numberValue={value.strength}
              setNumberValue={setStrengthNumber}
            />
            <Select
              title="Challenges"
              itemsName={challengesItemsArray}
              getValue={setChallengesValue}
              itemValue={value.challenges.challenge}
            />
            <View style={styles.buttonContainer}>
              <Button
                bgColor="#ffc533"
                height={40}
                width={280}
                buttonTitle="Search"
                fontColor="#000000"
                press={() =>
                  onSearch(
                    value.type,
                    value.faction,
                    value.cost,
                    value.strength,
                    value.challenges,
                  )
                }
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </>
  );
};

export default Cards;
