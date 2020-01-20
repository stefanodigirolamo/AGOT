import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import backgroundDeck from '../../assets/background_dailyDecks.jpg';
import deckStyles from './cardDeckStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Deck = ({name, faction}) => {
  const styles = deckStyles;

  return (
    <>
      <View style={styles.newDeckIconContainer}>
        <Icon name="new-box" size={20} color="#b53131ec" />
      </View>
      <View style={styles.cardContainer}>
        <ImageBackground
          style={{width: '100%'}}
          imageStyle={{transform: [{rotateY: '180deg'}]}}
          source={backgroundDeck}>
          <View style={styles.detailContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{faction}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="chevron-right" size={25} color="#ffc533" />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Deck;
