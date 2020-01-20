import React, {useState, useEffect, useCallback} from 'react';
import CardDetailsStyle from './CardDetailsStyle';
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

  console.log(cardInfo);

  return !cardInfo.image_url ? (
    <Spinner />
  ) : (
    <>
      <Text style={styles.cardTitle}> {cardInfo.name} </Text>
      <TouchableOpacity
        style={styles.cardImageContainer}
        onPress={() => openModal()}>
        <Image
          style={styles.cardImage}
          resizeMode="contain"
          source={{uri: `${cardInfo.image_url}`}}
        />
      </TouchableOpacity>
      <View style={{marginTop: '4%'}}>
        <Text style={styles.cardDescriptions}> " {cardInfo.text} " </Text>
        <Text style={styles.cardDescriptions}>
          Faction Name: {cardInfo.faction_name}
        </Text>
        <Text style={styles.cardDescriptions}>
          Pack Name: "{cardInfo.pack_name}"
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
            <View style={styles.modalImageContainer}>
              <Image
                style={styles.modalImage}
                resizeMode="contain"
                source={{uri: `${cardInfo.image_url}`}}
              />
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
    </>
  );
};

export default CardDetails;
