import React, {useContext, useMemo} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import filteredCardListStyle from './filteredCardListStyle';
import {Context} from '../../../../App';
import {ScrollView} from 'react-native-gesture-handler';

const Filtered = ({navigation}) => {
  const styles = filteredCardListStyle;

  const {
    type,
    factions,
    cost: {valueCost, selectedCost},
    strength: {valueStrength, selectedStrength},
    challenges,
  } = navigation.state.params;

  const cardsList = useContext(Context);

  const filteredCardsArray = useMemo(
    () =>
      cardsList.reduce((acc, item) => {
        let isValidFilter = true;

        if (type.length > 0 && type !== item.type_name) {
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
        Object.entries(challenges).map(([challengeKey, challengeValue]) => {
          if (challengeValue) {
            Object.entries(item).map(([key, value]) => {
              if (challengeKey === key && challengeValue !== value) {
                isValidFilter = false;
              }
            });
          }
        });

        if (isValidFilter) {
          acc.push(item);
        }
        return acc;
      }, []),
    [
      type,
      valueCost,
      valueStrength,
      selectedCost,
      selectedStrength,
      challenges,
      cardsList,
    ],
  );

  const factionsCardsArrays = Object.entries(factions).map(([key, value]) =>
    filteredCardsArray.filter(item => {
      return item.faction_name === key && value;
    }),
  );

  const factionsArray = [].concat.apply([], factionsCardsArrays);

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
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} horizontal style={styles.headerContainer}>
        {type ? (
          <View style={styles.headerItem}>
            <Text style={styles.appliedFilters}>
              {'  '}
              {type && type}
              {'  '}
            </Text>
          </View>
        ) : null}
        {Object.entries(challenges).map(([key, value]) => {
          if (value) {
            return (
              <View style={styles.headerItem}>
                <Text style={styles.appliedFilters}>
                  {'  '}
                  {key}
                  {'  '}
                </Text>
              </View>
            );
          } else {
            return null;
          }
        })}
        {selectedCost ? (
          <View style={styles.headerItem}>
            <Text style={styles.appliedFilters}>
              {'  '} {`Cost: ${valueCost}`}
              {'  '}{' '}
            </Text>
          </View>
        ) : null}
        {selectedStrength ? (
          <View style={styles.headerItem}>
            <Text style={styles.appliedFilters}>
              {'  '}
              {`Strength: ${valueStrength}`}
              {'  '}
            </Text>
          </View>
        ) : null}
        {Object.entries(factions).map(([key, value]) => {
          if (value) {
            return (
              <View style={styles.headerItem}>
                <Text style={styles.appliedFilters}>
                  {'  '}
                  {key} {'  '}
                </Text>
              </View>
            );
          } else {
            return null;
          }
        })}
      </ScrollView>
      {factionsArray.length === 0 && filteredCardsArray.length === 0 ? (
        <View style={styles.noCardsContainer}>
          <Text style={styles.textNoCards}>Cards not found</Text>
        </View>
      ) : factionsArray.length > 0 &&
        (filteredCardsArray.length === 0 || filteredCardsArray.length > 0) ? (
        <View style={styles.cardsContainer}>
          <FlatList
            bounces={false}
            keyExtractor={item => `key-${item.code}`}
            showsVerticalScrollIndicator={false}
            data={factionsArray}
            renderItem={renderCards}
          />
        </View>
      ) : filteredCardsArray.length > 0 && factionsArray.length === 0 ? (
        <View style={styles.cardsContainer}>
          <FlatList
            bounces={false}
            keyExtractor={item => `key-${item.code}`}
            showsVerticalScrollIndicator={false}
            data={filteredCardsArray}
            renderItem={renderCards}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Filtered;
