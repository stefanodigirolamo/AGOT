import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import deckStyles from './cardDeckStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Deck = ({name, faction}) => {
  const styles = deckStyles;

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        style={{width: '100%'}}
        source={{
          uri:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed23ad19-a59a-4b4c-a894-162a4e6b2537/d4fa1dz-18e8dfb3-6530-49f2-a20b-9bc4848f691a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkMjNhZDE5LWE1OWEtNGI0Yy1hODk0LTE2MmE0ZTZiMjUzN1wvZDRmYTFkei0xOGU4ZGZiMy02NTMwLTQ5ZjItYTIwYi05YmM0ODQ4ZjY5MWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YVuQrNi9HNQtx5GKkSfzR-SV6w45ocXVaEGinOo6BOQ',
        }}>
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
  );
};

export default Deck;
