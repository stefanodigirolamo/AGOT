import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {getDailyDecklists} from '../../api/decklistApi/decklistsApi';
import {getPackagesLists} from '../../api/packsApi/packagesApi';
import PacksImages from '../../assets/packagesImagesSwitch';
import Deck from '../../components/cardDeck/CardDeck';
import homeStyle from './homeStyles';
import Header from '../../components/header/Header';

const Home = ({navigation}) => {
  const styles = homeStyle;
  const [dailyDecks, setDailyDecks] = useState([]);
  const [packsLists, setPacksLists] = useState([]);

  const decks = async () => {
    try {
      const dailyDecks = await getDailyDecklists();
      setDailyDecks(dailyDecks);
    } catch (error) {
      console.log(error);
    }
  };

  const packs = async () => {
    try {
      const packsLists = await getPackagesLists();
      setPacksLists(packsLists);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (id, name, total, url) => {
    navigation.navigate('Modal', {id, name, total, url});
  };

  useEffect(() => {
    decks();
    packs();
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.decklistContainer}>
          <Text style={styles.decklistTitle}>Daily Decks</Text>
          {dailyDecks ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dailyDecks}
              keyExtractor={item => `key-${item.id}`}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{marginVertical: dailyDecks.length < 2 ? '15%' : '0%'}}
                  onPress={() => openModal(item.id)}>
                  <Deck
                    id={item.id}
                    name={item.title}
                    faction={item.faction}
                    description={item.description}
                  />
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={styles.warningContainer}>
              <Text style={styles.messageWarning}>
                I'm sorry! There are no Decklists for now!
              </Text>
            </View>
          )}
        </View>

        <View style={styles.packListContainer}>
          <Text style={styles.packListTitle}> All Packs Lists </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={packsLists.reverse()}
            renderItem={({item}) => (
              <View style={styles.singlePacksContainer}>
                <TouchableOpacity
                  onPress={() =>
                    openModal(item.code, item.name, item.total, item.url)
                  }>
                  <PacksImages packagesImages={item.name} />
                </TouchableOpacity>
                <Text style={styles.title}> {item.name} </Text>
                <Text style={styles.description}> Tot. {item.total} </Text>
              </View>
            )}
            keyExtractor={item => `key-${item.code}`}
          />
        </View>
      </View>
    </>
  );
};

export default Home;
