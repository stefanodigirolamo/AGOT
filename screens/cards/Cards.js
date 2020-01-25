import React, {useState, useEffect, useCallback} from 'react';
import CardsStyle from './CardsStyle';
import {View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import Header from '../../components/header/Header';
import {getAllCardsList} from '../../api/cardsApi/cardsApi';
import Select from '../../components/picker/Select';
import Button from '../../utils/button/Button';

const Cards = ({navigation}) => {
  const styles = CardsStyle;

  const [value, setValue] = useState({
    type: '',
    faction: '',
    cost: '',
    strenght: '',
    challenges: {challenge: '', boolean: false},
  });

  const [numberValue, setNumberValue] = useState({
    cost: '',
    strenght: '',
  });

  const valueObj = {
    type: '',
    faction: '',
    cost: '',
    strenght: '',
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
  const costItemsArray = ['', '=', '<', '>'];
  const strenghtItemsArray = ['', '=', '<', '>'];
  const challengesItemsArray = ['', 'is_military', 'is_intrigue', 'is_power'];

  const setTypeValue = item => {
    valueObj.type = item;
    setValue({...value, type: valueObj.type});
  };

  const setFactionValue = item => {
    valueObj.faction = item;
    setValue({...value, faction: valueObj.faction});
  };

  const setCostValue = item => {
    valueObj.cost = item;
    setValue({...value, cost: valueObj.cost});
  };

  const setStrenghtValue = item => {
    valueObj.strenght = item;
    setValue({...value, strenght: valueObj.strenght});
  };

  const setCostNumber = item => {
    valueObj.cost = item;
    setNumberValue({...numberValue, cost: valueObj.cost});
  };

  const setStrenghtNumber = item => {
    valueObj.strenght = item;
    setNumberValue({...numberValue, strenght: valueObj.strenght});
  };

  const setChallengesValue = item => {
    valueObj.challenges.challenge = item;
    setValue({
      ...value,
      challenges: {challenge: valueObj.challenges.challenge, boolean: true},
    });
  };

  const onSearch = (
    type,
    faction,
    symbolCost,
    symbolStrenght,
    valueCost,
    valueStrenght,
    challenges,
  ) => {
    navigation.navigate('Filtered', {
      type,
      faction,
      symbolCost,
      symbolStrenght,
      valueCost,
      valueStrenght,
      challenges,
    });
  };

  // console.log(value.type);
  // console.log(value.faction);
  // console.log(value.cost);
  // console.log(value.strenght);
  // console.log(numberValue.cost);
  // console.log(numberValue.strenght);
  // console.log(value.challenges);

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
              itemsName={costItemsArray}
              getValue={setCostValue}
              itemValue={value.cost}
              number
              textValue={numberValue.cost}
              setTextValue={setCostNumber}
            />
            <Select
              title="Strenght"
              itemsName={strenghtItemsArray}
              getValue={setStrenghtValue}
              itemValue={value.strenght}
              number
              textValue={numberValue.strenght}
              setTextValue={setStrenghtNumber}
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
                    value.strenght,
                    numberValue.cost,
                    numberValue.strenght,
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
