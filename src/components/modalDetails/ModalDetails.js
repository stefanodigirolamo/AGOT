import React, {useState, useEffect, useCallback, useRef} from 'react';
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
import {getDeckDetails} from '../../../api/deckDetailsApi/deckdetailsApi';
import {getCard} from '../../../api/cardApi/getCard';
import {getCards, getSections} from '../../../api/cardsApi/getCards';
import {format} from 'date-fns';
import Button from '../../../utils/button/Button';
import {colors, theme} from '../../../assets/styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Modal = ({navigation}) => {
  const styles = modalStyles;
  const packName = navigation.state.params.name;
  const totalCards = navigation.state.params.total;
  const URL = navigation.state.params.url;

  const [deckDetails, setDeckDetails] = useState({});
  const [cardSections, setCardSections] = useState([]);
  const [listOfCards, setListOfCards] = useState([]);
  const [isHeaderOpen, setHeaderOpen] = useState(false);

  const heightAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (packName) {
      card();
    } else {
      deck();
    }
  }, [packName, card, deck]);

  useEffect(() => {
    Animated.spring(heightAnimation, {
      toValue: isHeaderOpen ? 1 : 0,
      duration: 500,
    }).start();
  }, [isHeaderOpen, heightAnimation]);

  const getIds = slots => {
    return Object.keys(slots);
  };

  const deck = useCallback(async () => {
    try {
      const details = await getDeckDetails(navigation.state.params.id);
      const ids = getIds(details.slots);
      const cards = await Promise.all(ids.map(item => getCard(item)));
      const array_type_name = cards.map(item => item.type_name);
      const cardSectionsArray = await getSections(array_type_name, cards);
      setListOfCards(cards);
      setDeckDetails(details);
      setCardSections(cardSectionsArray);
    } catch (error) {
      return undefined;
    }
  }, [navigation.state.params.id]);

  const card = useCallback(async () => {
    try {
      const cards = await getCards(navigation.state.params.id);
      const array_type_name = cards.map(item => item.type_name);
      const cardListSections = await getSections(array_type_name, cards);
      setCardSections(cardListSections);
    } catch (error) {
      return undefined;
    }
  }, [navigation.state.params.id]);

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
      {!deckDetails || cardSections < 1 ? (
        <Spinner spinnerStyles={styles.spinner} />
      ) : !packName && dateCreation ? (
        <View style={styles.decksContainer}>
          <Text style={styles.deckTitle}>{deckDetails.name}</Text>
          <Animated.View
            style={[styles.deckDetailsContainer, {height: heightTransform}]}>
            {isHeaderOpen && (
              <>
                <GraphCarousel
                  listOfCards={listOfCards}
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

export default Modal;
