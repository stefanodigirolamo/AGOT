import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import modalStyles from './modalStyles';
import {
  View,
  Text,
  Linking,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Spinner from '../../../utils/spinner/Spinner';
import GraphCarousel from '../graphCarousel/GraphCarousel';
import PackImage from '../../../assets/switch_pack_images/packagesImagesSwitch';
import CardList from '../cardList/CardList';
import {format} from 'date-fns';
import Button from '../../../utils/button/Button';
import {colors, theme} from '../../../assets/styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  getDeckDetailsAction,
  getDeckSlotsAction,
  getDeckCardsAction,
} from '../../../store/actions/decksActions';
import {getSectionsAction} from '../../../store/actions/cardsActions';
import {getPackCardsAction} from '../../../store/actions/packsActions';

const Modal = ({
  navigation,
  getDeckDetails,
  deckDetails,
  getSlotsOfDeck,
  slots,
  getCards,
  packCards,
  getDeckCards,
  deckCards,
  getSections,
  sections,
}) => {
  const styles = modalStyles;
  const id = navigation.state.params.id;
  const packName = navigation.state.params.name;
  const totalCards = navigation.state.params.total;
  const URL = navigation.state.params.url;

  const [isHeaderOpen, setHeaderOpen] = useState(false);

  const heightAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (packName) {
      getCards(id);
    } else {
      getSlotsOfDeck(id);
      getDeckDetails(id);
    }
  }, [id, getCards, getDeckDetails, getSlotsOfDeck, packName]);

  useEffect(() => {
    if (packName && packCards.length > 0) {
      getSections(packCards);
    }
  }, [packName, packCards, getSections]);

  useEffect(() => {
    if (!packName && slots.length > 0) {
      getDeckCards(slots);
    }
  }, [packName, slots, getDeckCards]);

  useEffect(() => {
    if (!packName && deckCards.length > 0) {
      getSections(deckCards);
    }
  }, [packName, deckCards, getSections]);

  useEffect(() => {
    Animated.spring(heightAnimation, {
      toValue: isHeaderOpen ? 1 : 0,
      duration: 500,
    }).start();
  }, [isHeaderOpen, heightAnimation]);

  const openUrl = () => {
    Linking.openURL(URL);
  };

  const openHeader = () => {
    setHeaderOpen(prevState => !prevState);
  };

  const dateCreation = deckDetails.date_creation;

  const cardsSections = sections.filter(
    item => item.title !== 'Agenda' && item.title !== 'Plot',
  );

  const heightTransform = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 400],
  });

  return (
    <View style={styles.container}>
      {!deckDetails || sections.length === 0 ? (
        <Spinner spinnerStyles={styles.spinner} />
      ) : !packName && dateCreation ? (
        <View style={styles.decksContainer}>
          <Text style={styles.deckTitle}>{deckDetails.name}</Text>
          <Animated.View
            style={[styles.deckDetailsContainer, {height: heightTransform}]}>
            {isHeaderOpen && (
              <>
                <GraphCarousel
                  deckCards={deckCards}
                  cardSections={cardsSections}
                />
                <View style={styles.dateContainer}>
                  <Text style={styles.dateCreationDeck}>
                    {format(new Date(dateCreation), 'dd-MM-yyyy')}
                  </Text>
                </View>
              </>
            )}
            <TouchableOpacity
              onPress={() => openHeader()}
              style={styles.iconContainer}>
              <Icon
                name={!isHeaderOpen ? 'chevron-down' : 'chevron-up'}
                size={30}
                color={theme.primary}
              />
            </TouchableOpacity>
          </Animated.View>
          <CardList deck navigation={navigation} sections={sections} />
        </View>
      ) : (
        packName && (
          <View style={styles.packsContainer}>
            <SafeAreaView style={styles.packDetailsContainer}>
              <View style={styles.headerItemsPackContainer}>
                <View style={styles.packImageContainer}>
                  <PackImage packagesImages={packName} />
                </View>
                <View style={styles.titlePackContainer}>
                  <Text style={styles.packTitle}>{packName}</Text>
                  <Text style={styles.details}> Total {totalCards} </Text>
                  <Button
                    bgColor={colors.mattYellowClear}
                    height="50%"
                    buttonTitle="View On Site"
                    press={() => openUrl()}
                  />
                </View>
              </View>
            </SafeAreaView>
            <CardList navigation={navigation} sections={sections} />
          </View>
        )
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  deckDetails: state.decksReducer.deckDetails,
  slots: state.decksReducer.slots,
  sections: state.cardsReducer.sections,
  packCards: state.packsReducer.packCards,
  deckCards: state.decksReducer.deckCards,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  getDeckDetails: id => dispatch(getDeckDetailsAction(id)),
  getSlotsOfDeck: id => dispatch(getDeckSlotsAction(id)),
  getSections: cardsArray => dispatch(getSectionsAction(cardsArray)),
  getCards: id => dispatch(getPackCardsAction(id)),
  getDeckCards: slotsArray => dispatch(getDeckCardsAction(slotsArray)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
