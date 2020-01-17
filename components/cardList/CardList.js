import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import cardStyles from './cardStyles';

const CardList = ({deck, cards, navigation}) => {
  const styles = cardStyles;

  const cardDetail = code => {
    navigation.navigate('Card', {code});
  };

  return (
    <FlatList
      data={cards}
      keyExtractor={item => item.code}
      ItemSeparatorComponent={() => (
        <View style={{height: 1, backgroundColor: '#c2a67f'}} />
      )}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => cardDetail(item.code)}>
          <View style={styles.cardContainer}>
            <View style={styles.cardNameContainer}>
              <Text style={styles.cardName}>
                {deck ? `${item.quantity} x ${item.name}` : item.name}
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="chevron-right" size={25} color="#ffc533" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default CardList;
