import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';
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
      <View>
        <ImageBackground
          source={{
            uri:
              'https://live.staticflickr.com/3328/4615825551_d36ae5f896_b.jpg',
          }}
          style={styles.loginButton}
          imageStyle={styles.loginButtonImage}>
          <Text style={styles.loginButtonText}> PLAY NOW </Text>
        </ImageBackground>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={packsLists}
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
      <View style={styles.decksListsContainer}>
        <Text style={styles.title}>Daily Decks</Text>
        {dailyDecks ?
          <FlatList
            data={dailyDecks}
            keyExtractor={item => `key-${item.id}`}
            renderItem={({ item }) => (
              <Deck id={item.id} name={item.title} faction={item.faction} description={item.description} />
            )
            }
          /> :
          <Text style={styles.description}>I'm sorry! There are no Decklist for today!</Text>
        }
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000C9',
  },
  loginButton: {
    height: 75,
    width: 260,
    marginVertical: '8%',
  },
  loginButtonImage: {
    opacity: 0.6,
    borderRadius: 7,
  },
  loginButtonText: {
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
    marginVertical: '6%',
    fontWeight: 'bold',
  },
  singlePacksContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  packsListsContainer: {
    marginTop: '5%',
    flex: 3,
  },
  title: {
    fontSize: 20,
    color: '#c2a67f',
    fontWeight: 'bold',
    marginTop: 15,
  },
  description: {
    fontSize: 15,
    color: '#c2a67f',
  },
  decksListsContainer: {
    flex: 1,
  },
});

export default Home;
