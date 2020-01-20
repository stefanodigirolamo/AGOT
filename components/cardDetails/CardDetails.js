import React, {useState, useEffect, useCallback} from 'react';
import CardDetailsStyle from './CardDetailsStyle';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import {getCard} from '../../api/cardApi/cardApi';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

  return (
    <>
      <View style={styles.topDetailsContainer}>
        <View style={styles.cardImageContainer}>
          <TouchableNativeFeedback onPress={() => openModal()}>
            <Image
              style={styles.cardImage}
              resizeMode="contain"
              source={{uri: `${cardInfo.image_url}`}}
            />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.firstDetailsContainer}>
          <Text style={styles.cardTitle}> {cardInfo.name} </Text>
          <Text style={styles.cardDescriptions}> {cardInfo.traits} </Text>
          <Text style={styles.cardDescriptions}> {cardInfo.flavor} </Text>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalState}
        onRequestClose={() => closeModal()}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => closeModal()}
            style={styles.closeModalIconContainer}>
            <Icon name="close-box-outline" color="#ffc533" size={25} />
          </TouchableOpacity>
          <View style={styles.modalImageContainer}>
            <Image
              style={styles.modalImage}
              resizeMode="contain"
              source={{uri: `${cardInfo.image_url}`}}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CardDetails;
