import React, {useContext, useMemo} from 'react';
import {View, Text} from 'react-native';
import filteredCardListStyle from './filteredCardListStyle';
import {Context} from '../../../App';

const Filtered = ({navigation}) => {
  const {
    type,
    faction,
    valueCost,
    valueStrength,
    challenges: {boolean},
  } = navigation.state.params;

  const styles = filteredCardListStyle;

  const cardsList = useContext(Context);

  const filteredCardsArray = useMemo(
    () =>
      cardsList.reduce((acc, item) => {
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
      }, []),
    [boolean, type, faction, valueCost, valueStrength, cardsList],
  );

  console.log(filteredCardsArray);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}> Filtered Cards </Text>
      </View>
    </>
  );
};

export default Filtered;
