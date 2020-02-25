import React, {useMemo, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import filteredCardListStyle from './filteredCardListStyle';
import {ScrollView} from 'react-native-gesture-handler';
import {getAllCardsAction} from '../../../../store/actions/cardsActions';

const Filtered = ({navigation, getAllCards, allCards}) => {
  const styles = filteredCardListStyle;

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  const {
    type,
    factions,
    cost: {valueCost, selectedCost},
    strength: {valueStrength, selectedStrength},
    challenges,
  } = navigation.state.params;

  const filteredCardsArray = useMemo(
    () =>
      allCards.reduce((acc, item) => {
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
      allCards,
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

const mapStateToProps = state => ({
  allCards: state.cardsReducer.allCards,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
  getAllCards: () => dispatch(getAllCardsAction()),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Filtered);
