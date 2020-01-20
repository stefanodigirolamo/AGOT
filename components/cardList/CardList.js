import React from 'react';
import {View, TouchableOpacity, SectionList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import cardListStyles from './cardListStyles';

const CardList = ({deck, cards, navigation}) => {
  const styles = cardListStyles;
  // console.log(cards);

  const cardDetail = code => {
    navigation.navigate('Card', {code});
  };

  const renderSectionListHeader = ({section}) => (
    <View style={styles.headerContainer}>
      <Text style={styles.sectionHeader}>{section.title}</Text>
    </View>
  );

  const handleRenderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => cardDetail(item.code)}>
        <View style={styles.cardContainer}>
          <View style={styles.cardNameContainer}>
            <Text style={styles.cardName}>
              {' '}
              {deck ? `${item.quantity} x ${item.name}` : item.name}
            </Text>
          </View>
          <View style={styles.arrowContainer}>
            <Icon name="chevron-right" size={25} color="#ffc533" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SectionList
      sections={cards}
      keyExtractor={item => `key-${item.code}`}
      stickySectionHeadersEnabled
      ItemSeparatorComponent={() => (
        <View style={{height: 0.5, backgroundColor: '#c2a67f'}} />
      )}
      renderSectionHeader={renderSectionListHeader}
      renderItem={handleRenderItem}
    />
  );
};

export default CardList;
