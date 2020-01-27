import React, {useEffect, useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {getAllCardsList} from '../../../api/cardsApi/cardsApi';
import filteredCardListStyle from './filteredCardListStyle';

const Filtered = ({navigation}) => {
  const {
    type,
    faction,
    valueCost,
    valueStrength,
    challenges: {boolean},
  } = navigation.state.params;

  const styles = filteredCardListStyle;

  const [filteredArray, setFilteredArray] = useState([]);

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
        if (
          (valueCost && valueCost < 0 && valueCost !== item.cost) ||
          (valueCost && valueCost !== 0 && valueCost !== item.cost)
        ) {
          isValidFilter = false;
        }
        if (
          (valueStrength &&
            valueStrength < 0 &&
            valueStrength !== item.strength) ||
          (valueStrength &&
            valueStrength !== 0 &&
            valueStrength !== item.strength)
        ) {
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
      setFilteredArray(filteredCards);
    } catch (error) {
      console.log(error);
    }
  }, [boolean, type, faction, valueCost, valueStrength]);

  useEffect(() => {
    filteredCardsArray();
  }, [filteredCardsArray]);

  console.log(filteredArray);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}> Filtered Cards </Text>
      </View>
    </>
  );
};

export default Filtered;
