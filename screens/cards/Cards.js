import React, {useState} from 'react';
import CardsStyle from './CardsStyle';
import {View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import Header from '../../components/header/Header';
import Select from '../../components/picker/Select';
import Button from '../../utils/button/Button';
import {theme, colors} from '../../assets/styles/theme';

const Cards = ({navigation}) => {
  const styles = CardsStyle;

  const [inputs, setInputs] = useState({
    type: '',
    faction: {factionName: '', selected: false},
    cost: {valueCost: 0, selectedCost: false},
    strength: {valueStrength: 0, selectedStrength: false},
    challenges: {challenge: '', boolean: false},
  });

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
    setInputs({...inputs, type: item});
  };

  const setFactionValue = item => {
    setInputs({
      ...inputs,
      faction: {factionName: item, selected: true},
    });
  };

  const setCostNumber = item => {
    setInputs({...inputs, cost: {valueCost: item, selectedCost: true}});
  };
  const setStrengthNumber = item => {
    setInputs({
      ...inputs,
      strength: {valueStrength: item, selectedStrength: true},
    });
  };

  const setChallengesValue = item => {
    setInputs({
      ...inputs,
      challenges: {challenge: item, boolean: true},
    });
  };

  const resetFilters = () => {
    setInputs({
      type: '',
      faction: {factionName: '', selected: false},
      cost: {valueCost: 0, selectedCost: false},
      strength: {valueStrength: 0, selectedStrength: false},
      challenges: {challenge: '', boolean: false},
    });
  };

  const clearCost = () => {
    setInputs({...inputs, cost: {valueCost: 0, selectedCost: false}});
  };

  const clearStrength = () => {
    setInputs({
      ...inputs,
      strength: {valueStrength: 0, selectedStrength: false},
    });
  };

  const onSearch = (type, faction, cost, strength, challenges) => {
    navigation.navigate('Filtered', {
      type,
      faction,
      cost,
      strength,
      challenges,
    });
  };

  return (
    <>
      <Header resetFilters resetValue={resetFilters} />

      <View style={styles.container}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
            style={{flexGrow: 1, height: '100%'}}>
            <Select
              placeholder="- Select Type -"
              title="Types"
              itemsName={typeItemsArray}
              getValue={setTypeValue}
              itemValue={inputs.type}
            />
            <Select
              placeholder="- Select Challenges -"
              title="Challenges"
              itemsName={challengesItemsArray}
              getValue={setChallengesValue}
              itemValue={inputs.challenges.challenge}
            />
            <Select
              title="Cost"
              number
              cost={true}
              costValue={inputs.cost.valueCost}
              setCostValue={setCostNumber}
              initValueCost={inputs.cost.valueCost}
              clearCost={clearCost}
            />
            <Select
              title="Strength"
              number
              cost={false}
              strengthValue={inputs.strength.valueStrength}
              setStrengthValue={setStrengthNumber}
              initValueStrength={inputs.strength.valueStrength}
              clearStrength={clearStrength}
            />
            <Select
              title="Factions"
              factionLogo
              itemsName={factionItemsArray}
              itemValue={inputs.faction}
              getValue={setFactionValue}
            />
            <View style={styles.buttonContainer}>
              <Button
                bgColor={theme.primary}
                height={40}
                width={280}
                buttonTitle="Search"
                fontColor={colors.black}
                press={() =>
                  onSearch(
                    inputs.type,
                    inputs.faction,
                    inputs.cost,
                    inputs.strength,
                    inputs.challenges,
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
