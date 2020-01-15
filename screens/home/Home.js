import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {getDailyDecklists} from '../../api/decklists/dailyDecklists';
import {getPackagesLists} from '../../api/packs/packagesLists';
import PacksImages from '../../assets/packagesImagesSwitch';

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
      <View style={styles.packsListsTitleContainer}>
        <Text style={styles.listsTitle}> All Packs Lists </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={packsLists.reverse()}
        renderItem={({item}) => (
          <View style={styles.singlePacksContainer}>
            <PacksImages packagesImages={item.name} />
            <Text style={styles.title}> {item.name} </Text>
            <Text style={styles.description}> Tot. {item.total} </Text>
          </View>
        )}
        keyExtractor={item => `key-${item.code}`}
        style={styles.packsListsContainer}
      />

      <FlatList
        data={dailyDecks}
        keyExtractor={item => `key-${item.id}`}
        style={styles.decksListsContainer}
        renderItem={({item}) => (
          <View>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.faction}</Text>
          </View>
        )}
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
    marginVertical: '6%',
    marginLeft: '5%',
  },
  listsTitle: {
    color: '#ffc533',
    fontSize: 18,
    fontWeight: 'bold',
  },
  singlePacksContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  packsListsContainer: {
    flex: 2,
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
  decksListsContainer: {
    flex: 3,
  },
});

export default Home;
