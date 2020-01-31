import React, {useContext, useMemo} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import filteredCardListStyle from './filteredCardListStyle';
import {Context} from '../../../App';
import noCardImage from '../../../assets/no_card_image.jpg';

const Filtered = ({navigation}) => {
  const styles = filteredCardListStyle;

  const {
    type,
    faction: {name, selected},
    valueCost,
    valueStrength,
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
        if (selected && name.length > 0 && name !== item.faction_name) {
          isValidFilter = false;
        }
        if (valueCost && valueCost >= 0 && valueCost !== item.cost) {
          isValidFilter = false;
        }
        if (
          valueStrength &&
          valueStrength >= 0 &&
          valueStrength !== item.strength
        ) {
          isValidFilter = false;
        }
        if (challenge < 0 && boolean !== item.is_military) {
          isValidFilter = false;
        }
        if (challenge < 0 && boolean !== item.is_intrigue) {
          isValidFilter = false;
        }
        if (challenge < 0 && boolean !== item.is_power) {
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
      name,
      valueCost,
      valueStrength,
      boolean,
      challenge,
      cardsList,
    ],
  );

  const openCardDetails = code => {
    navigation.navigate('Card', {code});
  };

  const renderCards = ({item}) => (
    <View
      style={
        item.type_code === 'plot' ? styles.plotContainer : styles.imageContainer
      }>
      <TouchableWithoutFeedback onPress={() => openCardDetails(item.code)}>
        <Image
          style={[
            item.type_code === 'plot'
              ? filteredCardsArray.length < 3
                ? styles.plotImageLess
                : styles.plotImageMore
              : filteredCardsArray.length < 3
              ? styles.imageLess
              : styles.imageMore,
          ]}
          source={item.image_url ? {uri: item.image_url} : noCardImage}
          borderRadius={10}
        />
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <>
      <View style={[styles.container]}>
        {filteredCardsArray.length > 0 ? (
          <FlatList
            keyExtractor={item => `key-${item.code}`}
            showsVerticalScrollIndicator={false}
            numColumns={
              filteredCardsArray && filteredCardsArray.length > 3 ? 2 : 1
            }
            horizontal={false}
            data={filteredCardsArray}
            renderItem={renderCards}
          />
        ) : (
          <Text style={styles.text}>Your query didn't match any card</Text>
        )}
      </View>
    </>
  );
};

export default Filtered;
