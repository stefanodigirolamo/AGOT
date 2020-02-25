import React, {useState, useEffect, useCallback, useRef} from 'react';
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
  getSlotsOfDeckAction,
} from '../../../store/actions/decksActions';
import {
  getSectionsAction,
  getCardAction,
  getCardsAction,
} from '../../../store/actions/cardsActions';

const Modal = ({
  navigation,
  getDeckDetails,
  deckDetails,
  getSlotsOfDeck,
  slots,
  getCards,
  cards,
  getCard,
  getSections,
}) => {
  const styles = modalStyles;
  const packName = navigation.state.params.name;
  const totalCards = navigation.state.params.total;
  const URL = navigation.state.params.url;
  console.log(navigation.state.params.id);

  const [cardSections, setCardSections] = useState([]);
  const [isHeaderOpen, setHeaderOpen] = useState(false);

  const heightAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (packName) {
      getCards(navigation.state.params.id);
      card();
    } else {
      getSlotsOfDeck(navigation.state.params.id);
      getDeckDetails(navigation.state.params.id);
      deck();
    }
  }, [
    navigation.state.params.id,
    getCards,
    getDeckDetails,
    getSlotsOfDeck,
    packName,
    card,
    deck,
  ]);

  useEffect(() => {
    Animated.spring(heightAnimation, {
      toValue: isHeaderOpen ? 1 : 0,
      duration: 500,
    }).start();
  }, [isHeaderOpen, heightAnimation]);

  const deck = useCallback(async () => {
    try {
      const cardsArray = await Promise.all(slots.map(item => getCard(item)));
      const array_type_name = cardsArray.map(item => item.type_name);
      const cardSectionsArray = await getSections(array_type_name, cardsArray);
      setCardSections(cardSectionsArray);
    } catch (error) {
      return undefined;
    }
  }, [slots, getCard, getSections]);

  const card = useCallback(async () => {
    try {
      const array_type_name = cards.map(item => item.type_name);
      console.log(array_type_name);

      const cardListSections = await getSections(array_type_name, cards);
      console.log(cardListSections);

      setCardSections(cardListSections);
    } catch (error) {
      return undefined;
    }
  }, [cards, getSections]);

  const openUrl = () => {
    Linking.openURL(URL);
  };

  const openHeader = () => {
    setHeaderOpen(prevState => !prevState);
  };

  const dateCreation = deckDetails.date_creation;

  const heightTransform = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 400],
  });

  return (
    <View style={styles.container}>
      {!deckDetails || cardSections.length === 0 ? (
        <Spinner spinnerStyles={styles.spinner} />
      ) : !packName && dateCreation ? (
        <View style={styles.decksContainer}>
          <Text style={styles.deckTitle}>{deckDetails.name}</Text>
          <Animated.View
            style={[styles.deckDetailsContainer, {height: heightTransform}]}>
            {isHeaderOpen && (
              <>
                <GraphCarousel
                  listOfCards={cards}
                  cardSections={cardSections}
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
          <CardList deck navigation={navigation} cards={cardSections} />
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
            <CardList navigation={navigation} cards={cardSections} />
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
  cards: state.cardsReducer.cards,
  card: state.cardsReducer.card,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  getDeckDetails: () => dispatch(getDeckDetailsAction()),
  getSlotsOfDeck: () => dispatch(getSlotsOfDeckAction()),
  getSections: () => dispatch(getSectionsAction()),
  getCards: () => dispatch(getCardsAction()),
  getCard: () => dispatch(getCardAction()),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
