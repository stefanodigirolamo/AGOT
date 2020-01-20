import React from 'react';
import CardsStyle from './CardsStyle';
import {View} from 'react-native';
import Header from '../../components/header/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cards = ({navigation}) => {
  const styles = CardsStyle;
  const cardsFilters = () => {
    navigation.navigate('Filters');
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Icon
          onPress={() => cardsFilters()}
          name="filter-outline"
          size={25}
          color="#c2a67f"
        />
      </View>
    </>
  );
};

export default Cards;
