import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Platform, StyleSheet } from 'react-native';
import { getDailyDecklists } from '../../api/decklists/dailyDecklists';
import { getPackagesLists } from '../../api/packs/packagesLists';
import PacksImages from '../../assets/packagesImagesSwitch';
import Deck from '../../components/deck/Deck';
import homeStyle  from './homeStyles'

const Home = () => {
  const styles = homeStyle
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
      <View style={styles.listsContainer}>
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
            <Text style={styles.messageError}>I'm sorry! There are no Decklists for now!</Text>
          </View>
        }
      </View>


      <View style={styles.listsContainer}>
        <Text style={styles.listsTitle}> All Packs Lists </Text>
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
        />
      </View>
    </View>
  );
};

export default Home;
