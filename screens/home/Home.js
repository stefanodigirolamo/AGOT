import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getDailyDecklists, getCardsOfDeck } from '../../api/decklists/dailyDecklists';

const Home = () => {
  const [dailyDecks, setDailyDecks] = useState([])
  const decks = async () => {
    try {
      const dailyDecks = await getDailyDecklists()
      console.log(dailyDecks);

      setDailyDecks(dailyDecks)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    decks()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={dailyDecks}
        keyExtractor={item => `key-${item.id}`}
        renderItem={({item}) => (
          <>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.faction}</Text>
          </>
        )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000C9',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

export default Home;
