import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header';
import decklistStyles from './decklistStyle';
import {getWeeklyDecklists} from '../../api/decklistApi/decklistsApi';
import {format, eachDayOfInterval, subDays} from 'date-fns';
import HousesCard from '../../assets/houses_cards/housesCardSwitch';
import {theme, colors} from '../../assets/styles/theme';
import Spinner from '../../utils/spinner/Spinner';

const styles = decklistStyles;

const lastDayWeek = format(new Date(), 'yyyy, M, d');
const firstDayWeek = format(subDays(new Date(lastDayWeek), 7), 'yyyy, M, d');

const week = eachDayOfInterval({
  start: new Date(firstDayWeek),
  end: new Date(lastDayWeek),
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
      console.log(error);
    }
  }, []);

  useEffect(() => {
    deck();
  }, [deck]);

  const openDeckDetails = id => {
    navigation.navigate('Modal', {id});
  };

  const renderDeck = ({item}) =>
    item &&
    item.map(deckItem => (
      <TouchableOpacity onPress={() => openDeckDetails(deckItem.id)}>
        <View style={styles.cardBox}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>{deckItem.title}</Text>
            <View style={{paddingVertical: '6%'}}>
              <HousesCard
                factionName={deckItem.faction}
                width={140}
                height={200}
              />
            </View>

            <View style={styles.joust_melee_container}>
              <Text
                style={[
                  styles.joust_melee_text,
                  deckItem.joust ? {color: '#0B6623'} : {color: '#C21807'},
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
                  deckItem.melee ? {color: '#0B6623'} : {color: '#C21807'},
                ]}>
                M
              </Text>
            </View>

            <Text
              ellipsizeMode="tail"
              numberOfLines={4}
              style={styles.description}>
              {deckItem.description}
            </Text>
          </View>

          <Text
            style={[
              styles.description,
              {textAlign: 'right', paddingTop: '3%', paddingRight: '3%'},
            ]}>
            {format(new Date(deckItem.dateUpdt), 'dd-MM-yyyy')}
          </Text>
        </View>
      </TouchableOpacity>
    ));

  return (
    <>
      <Header />

      {decklist.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={decklist}
            renderItem={renderDeck}
            keyExtractor={item => item && item.map(code => `${code.id}`)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: colors.mattBlack}}>
          <Spinner styles={{marginTop: '80%'}} />
        </View>
      )}
    </>
  );
};

export default DecksList;
