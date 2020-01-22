import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Button from '../../../utils/button/Button';
import Select from '../../../components/picker/Select';

const cardsFilters = () => {
  const typeItemsArray = [
    '- Select Type -',
    'Agenda',
    'Attachment',
    'Character',
    'Plot',
    'Event',
    'Location',
  ];
  const factionItemsArray = [
    '- Select Faction -',
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
  const costItemsArray = ['=', '<', '>'];
  const strenghtItemsArray = ['=', '<', '>'];
  const challengesItemsArray = [
    '- Select Challenges -',
    'Military',
    'Intrigue',
    'Power',
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
          style={{flexGrow: 1, height: '100%'}}>
          <Select title="Type" itemName={typeItemsArray} />
          <Select title="Faction" itemName={factionItemsArray} />
          <Select title="Cost" itemName={costItemsArray} number />
          <Select title="Strenght" itemName={strenghtItemsArray} number />
          <Select title="Challenges" itemName={challengesItemsArray} />
          <Button
            bgColor="#ffc533"
            height="30%"
            width={280}
            buttonTitle="Search"
            fontColor="#000000"
          />
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
});

export default cardsFilters;
