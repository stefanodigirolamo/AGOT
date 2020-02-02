import React, {useState, useEffect, useCallback} from 'react';
import modalStyles from './modalStyles';
import {View, Text, ImageBackground, Linking} from 'react-native';
import headerBackground from '../../assets/modal_header_background.jpg';
import Spinner from '../../utils/spinner/Spinner';
import PackImage from '../../assets/switch_pack_images/packagesImagesSwitch';
import CardList from '../cardList/CardList';
import {getDeckDetails} from '../../api/deckDetailsApi/deckdetailsApi';
import {getCard} from '../../api/cardApi/cardApi';
import {getCards, getSections} from '../../api/cardsApi/cardsApi';
import {format} from 'date-fns';
import Button from '../../utils/button/Button';
import {theme, colors} from '../../assets/styles/theme';

const Modal = ({navigation}) => {
  const styles = modalStyles;
  const packName = navigation.state.params.name;
  const totalCards = navigation.state.params.total;
  const URL = navigation.state.params.url;

  const [deckDetails, setDeckDetails] = useState({});
  const [cardSections, setCardSections] = useState([]);

  useEffect(() => {
    if (packName) {
      card();
    } else {
      deck();
    }
  }, [packName, card, deck]);

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
      console.log(error);
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
      // console.log(cardSections);
    } catch (error) {
      console.log(error);
    }
  }, [navigation.state.params.id]);

  const openUrl = () => {
    Linking.openURL(URL);
  };

  const dateCreation = deckDetails.date_creation;

  return (
    <View style={styles.container}>
      {!deckDetails || cardSections < 1 ? (
        <Spinner />
      ) : !packName && dateCreation ? (
        <View style={{flex: 3}}>
          <ImageBackground
            source={headerBackground}
            imageStyle={{opacity: 0.95}}
            style={styles.deckDetailsContainer}>
            <View style={styles.deckNameContainer}>
              <Text style={styles.title}>{deckDetails.name}</Text>
            </View>
            <View style={styles.headerItemsContainer}>
              <Text style={styles.details}>{deckDetails.faction_name}</Text>
              <Text style={styles.details}>
                {format(new Date(dateCreation), 'dd-MM-yyyy')}
              </Text>
            </View>
          </ImageBackground>
          <CardList deck navigation={navigation} cards={cardSections} />
        </View>
      ) : (
        packName && (
          <View style={{flex: 2}}>
            <ImageBackground
              source={headerBackground}
              imageStyle={{opacity: 0.95}}
              style={styles.packDetailsContainer}>
              <View style={styles.headerItemsContainer}>
                <View style={styles.imageContainer}>
                  <PackImage packagesImages={packName} />
                </View>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{packName}</Text>
                  <Text style={styles.details}> Total {totalCards} </Text>
                  <Button
                    bgColor={colors.mattBlack}
                    height="50%"
                    buttonTitle="View On Site"
                    fontColor={theme.secondary}
                    press={() => openUrl()}
                  />
                </View>
              </View>
            </ImageBackground>
            <CardList navigation={navigation} cards={cardSections} />
          </View>
        )
      )}
    </View>
  );
};

export default Modal;
