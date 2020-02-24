import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import decklistStyles from './decklistStyle';
import {getWeeklyDecklists} from '../../api/decklistApi/decklistsApi';
import {format, eachDayOfInterval, subDays} from 'date-fns';
import HousesCard from '../../assets/houses_cards/housesCardSwitch';
import {theme} from '../../assets/styles/theme';
import Spinner from '../../utils/spinner/Spinner';

const styles = decklistStyles;

const firstDayWeek = subDays(new Date(), 7);

const week = eachDayOfInterval({
  start: new Date(firstDayWeek),
  end: new Date(),
});

const formattedWeek = week.map(item => format(new Date(item), 'yyyy-MM-dd'));

const DecksList = ({navigation}) => {
  const [decklist, setDecklist] = useState([]);

  const deck = useCallback(async () => {
    try {
      const details = await Promise.all(
        formattedWeek.map(day => getWeeklyDecklists(day)),
      );
      setDecklist(details);
    } catch (error) {
      return undefined;
    }
  }, []);

  useEffect(() => {
    deck();
  }, [deck]);

  const openDeckDetails = id => {
    navigation.navigate('Modal', {id});
  };

  const decklistArray = [].concat.apply([], decklist);

  const renderDeck = ({item}) => {
    if (item) {
      return (
        <TouchableOpacity onPress={() => openDeckDetails(item.id)}>
          <View style={styles.cardBox}>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.houseCardContainer}>
                <HousesCard
                  factionName={item.faction}
                  width={140}
                  height={200}
                />
              </View>

              <View style={styles.joust_melee_container}>
                <Text
                  style={[
                    styles.joust_melee_text,
                    item.joust ? styles.joustColor : styles.meleeColor,
                  ]}>
                  J
                </Text>
                <Text style={[styles.joust_melee_text, {color: theme.primary}]}>
                  {' '}
                  |{' '}
                </Text>
                <Text
                  style={[
                    styles.joust_melee_text,
                    item.melee ? styles.joustColor : styles.meleeColor,
                  ]}>
                  M
                </Text>
              </View>

              <Text
                ellipsizeMode="tail"
                numberOfLines={4}
                style={styles.description}>
                {item.description}
              </Text>
            </View>

            <Text style={styles.date}>
              {format(new Date(item.dateUpdt), 'dd-MM-yyyy')}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <>
      <Header />

      {decklist.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={decklistArray}
            renderItem={renderDeck}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item && `${item.id}`}
          />
        </View>
      ) : (
        <Spinner spinnerStyles={styles.spinner} />
      )}
    </>
  );
};

export default DecksList;
