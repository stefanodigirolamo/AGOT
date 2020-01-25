import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getAllCardsList} from '../../../api/cardsApi/cardsApi';

const Filtered = ({navigation}) => {
  const {
    type,
    faction,
    symbolCost,
    symbolStrenght,
    valueCost,
    valueStrenght,
    challenges: {challenge, boolean},
  } = navigation.state.params;

  const filteredCardsArray = useCallback(async () => {
    try {
      const cardsList = await getAllCardsList();

      const filteredCards = cardsList.reduce((acc, item) => {
        let isValidFilter = true;
        if (type.length > 0 && type !== item.type_name) {
          isValidFilter = false;
        }
        if (faction.length > 0 && faction !== item.faction_name) {
          isValidFilter = false;
        }
        if (valueCost !== item.cost) {
          isValidFilter = false;
        }
        if (boolean === true && boolean !== item.is_military) {
          isValidFilter = false;
        }
        if (boolean === true && boolean !== item.is_intrigue) {
          isValidFilter = false;
        }
        if (boolean === true && boolean !== item.is_power) {
          isValidFilter = false;
        }
        if (isValidFilter) {
          acc.push(item);
        }
        return acc;
      }, []);

      // const filteredArray = cardsList.map(card => {

      //   return (
      //     card.type_name === params.type ||
      //     card.faction_name === params.faction ||
      //     card.cost === params.valueCost ||
      //     card.strenght === params.valueStrenght ||
      //     card.is_military === params.challenges.boolean ||
      //     card.is_intrigue === params.challenges.boolean ||
      //     card.is_power === params.challenges.boolean
      //   );
      // });
      console.log(filteredCards);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    filteredCardsArray();
  }, [filteredCardsArray]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}> Filtered Cards </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

export default Filtered;
