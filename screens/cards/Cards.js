import React, {useState} from 'react';
import CardsStyle from './CardsStyle';
import {View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import Header from '../../components/header/Header';
import Select from '../../components/picker/Select';
import Button from '../../utils/button/Button';
import {theme, colors} from '../../assets/styles/theme';

const Cards = ({navigation}) => {
  const styles = CardsStyle;

  const [value, setValue] = useState({
    type: '',
    faction: {name: '', selected: false},
    cost: 0,
    strength: 0,
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
    setValue({...value, type: item});
  };

  const setFactionValue = item => {
    setValue({
      ...value,
      faction: {name: item, selected: true},
    });
  };

  const setCostNumber = item => {
    setValue({...value, cost: item});
  };

  const setStrengthNumber = item => {
    setValue({...value, strength: item});
  };

  const setChallengesValue = item => {
    setValue({
      ...value,
      challenges: {challenge: item, boolean: true},
    });
  };

  const resetFilters = () => {
    setValue({
      type: '',
      faction: {name: '', selected: false},
      cost: 0,
      strenght: 0,
      challenges: {challenge: '', boolean: false},
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
      <Header resetFilters resetValue={resetFilters} />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
            style={{flexGrow: 1, height: '100%'}}>
            <Select
              placeholder="- Select Type -"
              title="Types"
              itemsName={typeItemsArray}
              getValue={setTypeValue}
              itemValue={value.type}
            />
            <Select
              placeholder="- Select Challenges -"
              title="Challenges"
              itemsName={challengesItemsArray}
              getValue={setChallengesValue}
              itemValue={value.challenges.challenge}
            />
            <Select
              title="Cost"
              number
              numberValue={value.cost}
              setNumberValue={setCostNumber}
              initValue={value.cost}
            />
            <Select
              title="Strenght"
              number
              numberValue={value.strength}
              setNumberValue={setStrengthNumber}
              initValue={value.strength}
            />
            <Select
              title="Factions"
              factionLogo
              itemsName={factionItemsArray}
              itemValue={value.faction}
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
