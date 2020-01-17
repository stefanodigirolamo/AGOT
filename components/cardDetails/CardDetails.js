import React, {useState, useEffect, useCallback} from 'react';
import CardDetailsStyle from './CardDetailsStyle';
import {View, Text, Image} from 'react-native';
import {getCard} from '../../api/cardApi/cardApi';

const CardDetails = ({navigation}) => {
  const styles = CardDetailsStyle;

  const [cardInfo, setCardInfo] = useState({});

  const card = useCallback(async () => {
    try {
      const info = await getCard(navigation.state.params.code);
      setCardInfo(info);
    } catch (error) {
      console.log(error);
    }
  }, [navigation.state.params.code]);

  useEffect(() => {
    card();
  }, [card]);

  console.log(cardInfo);

  return (
    <View style={styles.container}>
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          resizeMode="contain"
          source={{uri: `${cardInfo.image_url}`}}
        />
      </View>
    </View>
  );
};

export default CardDetails;
