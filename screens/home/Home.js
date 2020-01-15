import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Platform, StyleSheet } from 'react-native';
import { getDailyDecklists } from '../../api/decklists/dailyDecklists';
import { getPackagesLists } from '../../api/packs/packagesLists';
import PacksImages from '../../assets/packagesImagesSwitch';
import Deck from '../../components/deck/Deck';

const Home = () => {
  const [dailyDecks, setDailyDecks] = useState([]);
  const [packsLists, setPacksLists] = useState([]);

  const decks = async () => {
    try {
      const dailyDecks = await getDailyDecklists();
      setDailyDecks(dailyDecks);
      console.log(dailyDecks);
    } catch (error) {
      console.log(error);
    }
  };

  const packs = async () => {
    try {
      const packsLists = await getPackagesLists();
      setPacksLists(packsLists);
      console.log(packsLists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    decks();
    packs();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.decksListsContainer}>
        <Text style={styles.listsTitle}>Daily Decks</Text>
        {dailyDecks ?
          <FlatList
            data={dailyDecks}
            keyExtractor={item => `key-${item.id}`}
            renderItem={({ item }) => (
              <Deck id={item.id} name={item.title} faction={item.faction} description={item.description} />
            )
            }
          /> :
          <View style={styles.errorContainer}>
            <Text style={styles.messageError}>I'm sorry! There are no Decklist for today!</Text>
          </View>
        }
      </View>

      <View style={styles.packsListsTitleContainer}>
        <Text style={styles.listsTitle}> All Packs Lists </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={packsLists.reverse()}
        renderItem={({ item }) => (
          <View style={styles.singlePacksContainer}>
            <PacksImages packagesImages={item.name} />
            <Text style={styles.title}> {item.name} </Text>
            <Text style={styles.description}> Tot. {item.total} </Text>
          </View>
        )}
        keyExtractor={item => `key-${item.code}`}
        style={styles.packsListsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000C9',
  },
  packsListsTitleContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  listsTitle: {
    color: '#ffc533',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginVertical: Platform.OS === 'android' ? '6%' : '5%',
  },
  singlePacksContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  packsListsContainer: {
    flex: 2,
    marginTop: Platform.OS === 'ios' ? '5%' : null
  },
  title: {
    fontSize: 15,
    color: '#c2a67f',
    marginTop: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    color: '#c2a67f',
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: '25%'
  },
  messageError: {
    fontSize: 18,
    color: '#c2a67f',
  },
  decksListsContainer: {
    flex: 1,
  },
});

export default Home;
