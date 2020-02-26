import React from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import PacksImages from '../../../assets/switch_pack_images/packagesImagesSwitch';
import Deck from '../../components/cardDeck/CardDeck';
import homeStyle from './homeStyles';
import Header from '../../components/header/Header';

const Home = ({navigation, dailyDecks, packs}) => {
  const styles = homeStyle;

  const openModal = (id, name, total, url) => {
    navigation.navigate('Modal', {id, name, total, url});
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.decklistContainer}>
          <Text style={styles.decklistTitle}>Daily Decks</Text>
          {dailyDecks.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dailyDecks}
              keyExtractor={item => `key-${item.id}`}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{marginVertical: dailyDecks.length < 2 ? '8%' : '0%'}}
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
                I'm sorry! No Decks published yet!
              </Text>
            </View>
          )}
        </View>
        <View style={styles.packListContainer}>
          <Text style={styles.packListTitle}> All Packs Lists </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={packs}
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

const mapStateToProps = state => {
  return {
    dailyDecks: state.decksReducer.dailyDecks,
    packs: state.packsReducer.packs,
  };
};

export default connect(mapStateToProps)(Home);
