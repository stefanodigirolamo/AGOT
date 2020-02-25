import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
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
import {getCardByIdAction} from '../../../store/actions/cardsActions';

const CardDetails = ({navigation, getCard, card}) => {
  const styles = CardDetailsStyle;
  const id = navigation.state.params.code;
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    getCard(id);
  }, [id, getCard]);

  return !card.image_url ? (
    <Spinner spinnerStyles={styles.spinner} />
  ) : (
    <>
      <View style={{backgroundColor: factionColor(card.faction_name)}}>
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <FactionIcon
              factionName={card.faction_name}
              width={50}
              height={50}
            />
          </View>
          <View style={styles.cardNameContainer}>
            <Text style={styles.cardTitle}> {card.name} </Text>
          </View>
        </View>
      </View>

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.cardImageContainer}>
          <TouchableWithoutFeedback onPress={() => openModal()}>
            <Image
              style={[
                styles.cardImage,
                card.type_code === 'plot'
                  ? styles.dimensionsPlotCards
                  : styles.dimensionsOtherCards,
              ]}
              borderRadius={10}
              source={{uri: `${card.image_url}`}}
            />
          </TouchableWithoutFeedback>
        </View>

        <Text style={[styles.cardDetails, styles.emphasizedFaction]}>
          {card.faction_name}
        </Text>
        <Text style={[styles.cardDetails, styles.emphasizedName]}>
          {card.type_name} {card.cost && `. Cost: ${card.cost}`}
        </Text>
        {card.traits ? (
          <Text style={[styles.cardDetails, styles.emphasizedTraits]}>
            {card.traits}
          </Text>
        ) : null}
        <View style={styles.containerDescription}>
          <View
            style={[
              styles.verticalLineDesc,
              {backgroundColor: factionColor(card.faction_name)},
            ]}
          />
          <Text style={styles.cardDetails}>
            {card.text.replace(/<b>|<\/b>|<i>|<\/i>|<em>|<\/em>/gi, '')}
          </Text>
        </View>
        <Text style={styles.cardDetails}>Pack Name: {card.pack_name}</Text>
        <Text style={styles.cardDetails}>Deck Limit: {card.deck_limit}</Text>
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
                card.type_code === 'plot'
                  ? styles.dimensionsPlotZoom
                  : styles.dimensionsOtherZoom,
              ]}
              borderRadius={10}
              source={{uri: `${card.image_url}`}}
            />
          </View>
        </TouchableHighlight>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  card: state.cardsReducer.card,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  getCard: id => dispatch(getCardByIdAction(id)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
