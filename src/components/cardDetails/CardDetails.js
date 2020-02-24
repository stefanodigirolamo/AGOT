import React, {useState, useEffect, useCallback} from 'react';
import CardDetailsStyle from './CardDetailsStyle';
import FactionIcon from '../../../assets/houses_logos/housesLogoSwitch';
import factionColor from '../../../assets/styles/factionColor';
import Spinner from '../../../utils/spinner/Spinner';
import {
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Modal,
  Text,
  TouchableHighlight,
} from 'react-native';
import {getCard} from '../../../api/cardApi/getCard';

const CardDetails = ({navigation}) => {
  const styles = CardDetailsStyle;
  const [cardInfo, setCardInfo] = useState({});
  const [modalState, setModalState] = useState(false);

  const card = useCallback(async () => {
    try {
      const info = await getCard(navigation.state.params.code);
      setCardInfo(info);
    } catch (error) {
      return undefined;
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
    <Spinner spinnerStyles={styles.spinner} />
  ) : (
    <>
      <View style={{backgroundColor: factionColor(cardInfo.faction_name)}}>
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <FactionIcon
              factionName={cardInfo.faction_name}
              width={50}
              height={50}
            />
          </View>
          <View style={styles.cardNameContainer}>
            <Text style={styles.cardTitle}> {cardInfo.name} </Text>
          </View>
        </View>
      </View>

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.cardImageContainer}>
          <TouchableWithoutFeedback onPress={() => openModal()}>
            <Image
              style={[
                styles.cardImage,
                cardInfo.type_code === 'plot'
                  ? styles.dimensionsPlotCards
                  : styles.dimensionsOtherCards,
              ]}
              borderRadius={10}
              source={{uri: `${cardInfo.image_url}`}}
            />
          </TouchableWithoutFeedback>
        </View>

        <Text style={[styles.cardDetails, styles.emphasizedFaction]}>
          {cardInfo.faction_name}
        </Text>
        <Text style={[styles.cardDetails, styles.emphasizedName]}>
          {cardInfo.type_name} {cardInfo.cost && `. Cost: ${cardInfo.cost}`}
        </Text>
        {cardInfo.traits ? (
          <Text style={[styles.cardDetails, styles.emphasizedTraits]}>
            {cardInfo.traits}
          </Text>
        ) : null}
        <View style={styles.containerDescription}>
          <View
            style={[
              styles.verticalLineDesc,
              {backgroundColor: factionColor(cardInfo.faction_name)},
            ]}
          />
          <Text style={styles.cardDetails}>
            {cardInfo.text.replace(/<b>|<\/b>|<i>|<\/i>|<em>|<\/em>/gi, '')}
          </Text>
        </View>
        <Text style={styles.cardDetails}>Pack Name: {cardInfo.pack_name}</Text>
        <Text style={styles.cardDetails}>
          Deck Limit: {cardInfo.deck_limit}
        </Text>
      </ScrollView>

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
                  ? styles.dimensionsPlotZoom
                  : styles.dimensionsOtherZoom,
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
