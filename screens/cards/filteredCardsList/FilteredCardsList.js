import React, {useContext, useMemo} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import filteredCardListStyle from './filteredCardListStyle';
import {Context} from '../../../App';

const Filtered = ({navigation}) => {
  const styles = filteredCardListStyle;

  const {
    type,
    faction: {factionName, selected},
    cost: {valueCost, selectedCost},
    strength: {valueStrength, selectedStrength},
    challenges: {challenge, boolean},
  } = navigation.state.params;

  const cardsList = useContext(Context);

  const filteredCardsArray = useMemo(
    () =>
      cardsList.reduce((acc, item) => {
        let isValidFilter = true;

        if (type.length > 0 && type !== item.type_name) {
          isValidFilter = false;
        }
        if (selected && factionName !== item.faction_name) {
          isValidFilter = false;
        }
        if (selectedCost && valueCost >= 0 && valueCost !== item.cost) {
          isValidFilter = false;
        }
        if (
          selectedStrength &&
          valueStrength >= 0 &&
          valueStrength !== item.strength
        ) {
          isValidFilter = false;
        }
        if (boolean && boolean !== item.is_military) {
          isValidFilter = false;
        }
        if (boolean && boolean !== item.is_intrigue) {
          isValidFilter = false;
        }
        if (boolean && boolean !== item.is_power) {
          isValidFilter = false;
        }
        if (isValidFilter) {
          acc.push(item);
        }
        return acc;
      }, []),
    [
      type,
      selected,
      factionName,
      valueCost,
      valueStrength,
      selectedCost,
      selectedStrength,
      boolean,
      cardsList,
    ],
  );

  const openCardDetails = code => {
    navigation.navigate('Card', {code});
  };

  const renderCards = ({item}) =>
    item.image_url && (
      <View style={styles.cardContainer}>
        <TouchableWithoutFeedback onPress={() => openCardDetails(item.code)}>
          <Image
            style={item.type_code === 'plot' ? styles.plotImage : styles.cards}
            source={{uri: item.image_url}}
            borderRadius={10}
          />
        </TouchableWithoutFeedback>
      </View>
    );

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            paddingTop: Platform.OS === 'ios' && 40,
          },
          styles.headerContainer,
        ]}>
        {type ? (
          <View style={styles.headerItem}>
            <Text style={styles.appliedFilters}>{type && type}</Text>
          </View>
        ) : null}
        {boolean && challenge !== '' ? (
          <View style={styles.headerItem}>
            <Text style={styles.appliedFilters}>{challenge && challenge}</Text>
          </View>
        ) : null}
        {selectedCost ? (
          <View style={styles.headerItem}>
            <Text style={styles.appliedFilters}>{`Cost ${valueCost}`}</Text>
          </View>
        ) : null}
        {selectedStrength ? (
          <View style={styles.headerItem}>
            <Text style={styles.appliedFilters}>
              {`Strength ${valueStrength}`}
            </Text>
          </View>
        ) : null}
        {selected ? (
          <View style={styles.headerItem}>
            <Text style={styles.appliedFilters}>
              {factionName && factionName}
            </Text>
          </View>
        ) : null}
      </View>
      {filteredCardsArray.length > 0 ? (
        <View style={styles.cardsContainer}>
          <FlatList
            bounces={false}
            keyExtractor={item => `key-${item.code}`}
            showsVerticalScrollIndicator={false}
            data={filteredCardsArray}
            renderItem={renderCards}
          />
        </View>
      ) : (
        <View
          style={[
            styles.cardsContainer,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <Text style={styles.textNoCards}>Cards not found</Text>
        </View>
      )}
    </View>
  );
};

export default Filtered;
