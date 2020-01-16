import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, ImageBackground, Image, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import modalStyles from './modalStyles';
import {getDeckDetails} from '../../api/deckDetailsApi/deckdetailsApi';
import {getPackDetails} from '../../api/packDetailsApi/packDetailsApi';
import PackImage from '../../assets/packagesImagesSwitch';
import {format} from 'date-fns';

const Modal = ({navigation}) => {
  const styles = modalStyles;
  const packName = navigation.state.params.name;
  const totalCards = navigation.state.params.total;

  const [deckDetails, setDeckDetails] = useState({});
  const [packDetails, setPackDetails] = useState([]);

  useEffect(() => {
    if (packName) {
      pack();
    } else {
      deck();
    }
  }, [packName, deck, pack]);

  const deck = useCallback(async () => {
    try {
      const details = await getDeckDetails(navigation.state.params.id);
      setDeckDetails(details);
    } catch (error) {
      console.log(error);
    }
  }, [navigation.state.params.id]);

  const pack = useCallback(async () => {
    try {
      const details = await getPackDetails(navigation.state.params.id);
      setPackDetails(details);
    } catch (error) {
      console.log(error);
    }
  }, [navigation.state.params.id]);

  console.log(deckDetails);
  const dateCreation = deckDetails.date_creation;

  return (
    <View>
      {!packName && dateCreation ? (
        <ImageBackground
          source={{
            uri: 'https://jooinn.com/images1280_/old-paper-background.jpg',
          }}
          imageStyle={{opacity: 0.95, borderRadius: 7}}
          style={styles.detailsContainer}>
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
      ) : (
        <View>
          <ImageBackground
            source={{
              uri: 'https://jooinn.com/images1280_/old-paper-background.jpg',
            }}
            imageStyle={{opacity: 0.95, borderRadius: 7}}
            style={styles.detailsContainer}>
            <View style={styles.headerItemsContainer}>
              <View style={styles.imageContainer}>
                <PackImage packagesImages={packName} />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{packName}</Text>
                <Text style={styles.details}> Total {totalCards} </Text>
                <View style={styles.buttonContainer}>
                  <Button title="View On Site" color="#000000C9" />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
      <FlatList />
    </View>
  );
};

export default Modal;
