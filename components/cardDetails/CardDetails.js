import React, {useState, useEffect, useCallback} from 'react';
import CardDetailsStyle from './CardDetailsStyle';
import FactionIcon from '../../assets/houses_logos/housesLogoSwitch';
import factionColor from '../../utils/factionColors';
import Spinner from '../../utils/spinner/Spinner';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  TouchableHighlight,
} from 'react-native';
import {getCard} from '../../api/cardApi/cardApi';

const CardDetails = ({navigation}) => {
  const styles = CardDetailsStyle;

  const [cardInfo, setCardInfo] = useState({});
  const [modalState, setModalState] = useState(false);

  const card = useCallback(async () => {
    try {
      const info = await getCard(navigation.state.params.code);
      setCardInfo(info);
    } catch (error) {
      console.log(error);
    }
  }, [navigation.state.params.code]);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    card();
  }, [card]);

  return !cardInfo.image_url ? (
    <Spinner />
  ) : (
    <>
      <View style={{backgroundColor: factionColor(cardInfo.faction_name)}}>
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <FactionIcon factionName={cardInfo.faction_name} />
          </View>
          <View style={styles.cardNameContainer}>
            <Text style={styles.cardTitle}> {cardInfo.name} </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{display: 'flex', alignItems: 'center'}}
        onPress={() => openModal()}>
        <Image
          style={[
            styles.cardImage,
            cardInfo.type_code === 'plot'
              ? {width: 260, height: 160}
              : {width: 190, height: 270},
          ]}
          borderRadius={10}
          source={{uri: `${cardInfo.image_url}`}}
        />
      </TouchableOpacity>
      <View style={{marginTop: '4%'}}>
        <Text
          style={[
            styles.cardDescriptions,
            {color: '#ffc533', fontWeight: 'bold'},
          ]}>
          {cardInfo.faction_name}
        </Text>
        <Text style={[styles.cardDescriptions, {fontWeight: 'bold'}]}>
          {cardInfo.type_name} {cardInfo.cost && `. Cost: ${cardInfo.cost}`}
        </Text>
        {cardInfo.traits ? (
          <Text
            style={[
              styles.cardDescriptions,
              {fontWeight: 'bold', fontStyle: 'italic', color: '#ffc533'},
            ]}>
            {cardInfo.traits}
          </Text>
        ) : null}
        <View style={{display: 'flex', flexDirection: 'row', marginLeft: '2%'}}>
          <View
            style={{
              width: 3,
              height: '100%',
              backgroundColor: factionColor(cardInfo.faction_name),
            }}
          />
          <Text style={styles.cardDescriptions}>
            {cardInfo.text.replace(/<b>|<\/b>|<i>|<\/i>|<em>|<\/em>/gi, '')}
          </Text>
        </View>
        <Text style={styles.cardDescriptions}>
          Pack Name: {cardInfo.pack_name}
        </Text>
        <Text style={styles.cardDescriptions}>
          Deck Limit: {cardInfo.deck_limit}
        </Text>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalState}
        onRequestClose={() => closeModal()}>
        <TouchableHighlight
          onPress={() => closeModal()}
          style={styles.closeModalIconContainer}>
          <View style={styles.modalContainer}>
            <Image
              style={[
                styles.cardImage,
                cardInfo.type_code === 'plot'
                  ? {width: 370, height: 235}
                  : {width: 315, height: 450},
              ]}
              borderRadius={10}
              source={{uri: `${cardInfo.image_url}`}}
            />
          </View>
        </TouchableHighlight>
      </Modal>
    </>
  );
};

export default CardDetails;
