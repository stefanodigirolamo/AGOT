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
    cost: {valueCost: 0, selectedCost: false},
    strength: {valueStrength: 0, selectedStrength: false},
    challenges: {challenge: '', boolean: false},
  });

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

  const typeItemsArray = [
    '',
    'Agenda',
    'Attachment',
    'Character',
    'Plot',
    'Event',
    'Location',
  ];

  const challengesItemsArray = ['', 'is_military', 'is_intrigue', 'is_power'];

  const factionsActive = {};

  factionItemsArray.map(item => (factionsActive[item] = false));

  const [activeFactions, setFactionActive] = useState(factionsActive);

  const setTypeValue = item => {
    setInputs({...inputs, type: item});
  };

  const setFactionValue = selectedFaction => {
    Object.keys(activeFactions).map(key => {
      if (key === selectedFaction) {
        if (activeFactions[key] === false) {
          activeFactions[key] = true;
        } else {
          activeFactions[key] = false;
        }
      }
    });

    setFactionActive({...activeFactions});
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
      cost: {valueCost: 0, selectedCost: false},
      strength: {valueStrength: 0, selectedStrength: false},
      challenges: {challenge: '', boolean: false},
    });
    Object.keys(activeFactions).map(key => {
      if (activeFactions[key] === true) {
        activeFactions[key] = false;
      }
    });
    setFactionActive({...activeFactions});
  };

  const onSearch = (type, factions, cost, strength, challenges) => {
    navigation.navigate('Filtered', {
      type,
      factionItemsArray,
      factions,
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
            />
            <Select
              title="Strength"
              number
              cost={false}
              strengthValue={inputs.strength.valueStrength}
              setStrengthValue={setStrengthNumber}
              initValueStrength={inputs.strength.valueStrength}
            />
            <Select
              title="Factions"
              factionLogo
              itemsName={factionItemsArray}
              itemValue={inputs.factions}
              activeFactions={activeFactions}
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
                    activeFactions,
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
