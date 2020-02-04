import React, {useState, useEffect, useCallback, useRef} from 'react';
import modalStyles from './modalStyles';
import {
  View,
  Text,
  Linking,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Spinner from '../../utils/spinner/Spinner';
import PackImage from '../../assets/switch_pack_images/packagesImagesSwitch';
import CardList from '../cardList/CardList';
import {getDeckDetails} from '../../api/deckDetailsApi/deckdetailsApi';
import {getCard} from '../../api/cardApi/cardApi';
import {getCards, getSections} from '../../api/cardsApi/cardsApi';
import {format} from 'date-fns';
import Button from '../../utils/button/Button';
import {colors, theme} from '../../assets/styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Modal = ({navigation}) => {
  const styles = modalStyles;
  const packName = navigation.state.params.name;
  const totalCards = navigation.state.params.total;
  const URL = navigation.state.params.url;

  const [deckDetails, setDeckDetails] = useState({});
  const [cardSections, setCardSections] = useState([]);
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

  const deck = useCallback(async () => {
    try {
      const details = await getDeckDetails(navigation.state.params.id);
      const ids = getIds(details.slots);
      const cards = await Promise.all(ids.map(item => getCard(item)));

      const array_type_name = cards.map(item => item.type_name);
      const cardSections = await getSections(array_type_name, cards);

      setDeckDetails(details);
      setCardSections(cardSections);
    } catch (error) {
      return undefined;
    }
  }, [navigation.state.params.id]);

  const getIds = slots => {
    return Object.keys(slots);
  };

  const card = useCallback(async () => {
    try {
      const cards = await getCards(navigation.state.params.id);
      const array_type_name = cards.map(item => item.type_name);
      const cardSections = await getSections(array_type_name, cards);
      setCardSections(cardSections);
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
        <View style={{flex: 1, backgroundColor: colors.black}}>
          <Spinner styles={{marginTop: '100%'}} />
        </View>
      ) : !packName && dateCreation ? (
        <View style={{flex: 3}}>
          <Text
            ellipsizeMode={!isHeaderOpen && 'tail'}
            numberOfLines={6}
            style={styles.deckTitle}>
            {deckDetails.name}
          </Text>

          <Animated.View
            style={[styles.deckDetailsContainer, {height: heightTransform}]}>
            {isHeaderOpen && (
              <Text style={styles.dateCreationDeck}>
                {format(new Date(dateCreation), 'dd-MM-yyyy')}
              </Text>
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
          <View style={{flex: 2}}>
            <View style={styles.packDetailsContainer}>
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
            </View>
            <CardList navigation={navigation} cards={cardSections} />
          </View>
        )
      )}
    </View>
  );
};

export default Modal;
