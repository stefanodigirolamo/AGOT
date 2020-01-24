import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Button from '../../../utils/button/Button';
import Select from '../../../components/picker/Select';

const CardsFilters = ({navigation}) => {
  const [value, setValue] = useState({
    type: '',
    faction: '',
    cost: '',
    strenght: '',
    challenges: '',
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
    challenges: '',
  };

  const typeItemsArray = [
    '-Select Type-',
    'Agenda',
    'Attachment',
    'Character',
    'Plot',
    'Event',
    'Location',
  ];
  const factionItemsArray = [
    '-Select Faction-',
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
  const challengesItemsArray = [
    '-Select Challenges-',
    'Military',
    'Intrigue',
    'Power',
  ];

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
    valueObj.challenges = item;
    setValue({...value, challenges: valueObj.challenges});
  };
  const onSearch = () => {
    navigation.goBack();
  };
  console.log(value.type);
  console.log(value.faction);
  console.log(value.cost);
  console.log(value.strenght);
  console.log(numberValue.cost);
  console.log(numberValue.strenght);
  console.log(value.challenges);

  return (
    <View style={styles.container}>
      <ScrollView style={Platform.OS === 'ios' && {marginTop: '18%'}}>
        {/* vedere margin per android */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
          style={{flexGrow: 1, height: '100%'}}>
          <Select
            placeholder="- Select Type -"
            title="Type"
            itemsName={typeItemsArray}
            getValue={setTypeValue}
            itemValue={value.type}
          />
          <Select
            placeholder="- Select Faction -"
            title="Faction"
            itemsName={factionItemsArray}
            getValue={setFactionValue}
            itemValue={value.faction}
          />
          <Select
            placeholder=" "
            title="Cost"
            itemsName={costItemsArray}
            getValue={setCostValue}
            itemValue={value.cost}
            textValue={numberValue.cost}
            setTextValue={setCostNumber}
            number
          />
          <Select
            placeholder=" "
            title="Strenght"
            itemsName={strenghtItemsArray}
            getValue={setStrenghtValue}
            itemValue={value.strenght}
            textValue={numberValue.strenght}
            setTextValue={setStrenghtNumber}
            number
          />
          <Select
            placeholder="- Select Challenges -"
            title="Challenges"
            itemsName={challengesItemsArray}
            getValue={setChallengesValue}
            itemValue={value.challenges}
          />
          <View style={styles.buttonContainer}>
            <Button
              bgColor="#ffc533"
              height={40}
              width={280}
              buttonTitle="Search"
              fontColor="#000000"
              press={onSearch}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default CardsFilters;
