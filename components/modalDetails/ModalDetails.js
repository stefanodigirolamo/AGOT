import React, {useState, useEffect, useCallback, useRef} from 'react';
import modalStyles from './modalStyles';
import {
  View,
  Text,
  Linking,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Spinner from '../../utils/spinner/Spinner';
import PackImage from '../../assets/switch_pack_images/packagesImagesSwitch';
import CardList from '../cardList/CardList';
import {getDeckDetails} from '../../api/deckDetailsApi/deckdetailsApi';
import {getCard} from '../../api/cardApi/cardApi';
import {getCards, getSections} from '../../api/cardsApi/cardsApi';
import {format} from 'date-fns';
import Button from '../../utils/button/Button';
import {colors, theme} from '../../assets/styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DeckSwiper, Card, CardItem} from 'native-base';
import {
  LineChart,
  ProgressChart,
  BarChart,
  PieChart,
} from 'react-native-chart-kit';
import factionColorSwitch from '../../assets/styles/factionColor';

const Modal = ({navigation}) => {
  const styles = modalStyles;
  const packName = navigation.state.params.name;
  const totalCards = navigation.state.params.total;
  const URL = navigation.state.params.url;

  const [deckDetails, setDeckDetails] = useState({});
  const [cardSections, setCardSections] = useState([]);
  const [listOfCards, setListOfCards] = useState([]);
  const [isHeaderOpen, setHeaderOpen] = useState(false);
  const [itemOne, setItemOne] = useState([]);
  const [itemTwo, setItemTwo] = useState([]);

  const heightAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (packName) {
      card();
    } else {
      deck();
    }
  }, [packName, card, deck]);

  useEffect(() => {
    Animated.spring(heightAnimation, {
      toValue: isHeaderOpen ? 1 : 0,
      duration: 500,
    }).start();
  }, [isHeaderOpen, heightAnimation]);

  const getIds = slots => {
    return Object.keys(slots);
  };

  const deck = useCallback(async () => {
    try {
      const details = await getDeckDetails(navigation.state.params.id);
      const ids = getIds(details.slots);
      const cards = await Promise.all(ids.map(item => getCard(item)));
      const array_type_name = cards.map(item => item.type_name);
      const cardSectionsArray = await getSections(array_type_name, cards);
      setListOfCards(cards);
      setDeckDetails(details);
      setCardSections(cardSectionsArray);
    } catch (error) {
      return undefined;
    }
  }, [navigation.state.params.id]);

  const card = useCallback(async () => {
    try {
      const cards = await getCards(navigation.state.params.id);
      const array_type_name = cards.map(item => item.type_name);
      const cardListSections = await getSections(array_type_name, cards);
      setCardSections(cardListSections);
    } catch (error) {
      return undefined;
    }
  }, [navigation.state.params.id]);

  const openUrl = () => {
    Linking.openURL(URL);
  };

  const openHeader = () => {
    setHeaderOpen(prevState => !prevState);
  };

  const dateCreation = deckDetails.date_creation;

  const heightTransform = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 400],
  });

  const swipeLeft = () => {
    let currentItem = cardsArray.indexOf(itemOne);
    let newCurrentItem = currentItem + 1;

    setItemOne(
      cardsArray[newCurrentItem > cardsArray.lenght - 1 ? 0 : newCurrentItem],
    );
    setItemTwo(
      cardsArray[
        newCurrentItem > cardsArray.lenght - 1 ? 1 : newCurrentItem - 1
      ],
    );
  };

  const swipeRight = () => {
    let currentItem = cardsArray.indexOf(itemOne);
    let newCurrentItem = currentItem - 1;

    setItemOne(
      cardsArray[
        newCurrentItem < cardsArray.lenght
          ? cardsArray.length - 1
          : newCurrentItem
      ],
    );
    setItemTwo(
      cardsArray[
        newCurrentItem < cardsArray.lenght
          ? cardsArray.lenght - 2
          : newCurrentItem - 2
      ],
    );
  };

  const groupByFaction = array => {
    let values = {};
    let results = [];
    array.map(item => {
      values[item.faction_name]
        ? (values[item.faction_name] += 1)
        : (values[item.faction_name] = 1);
    });

    Object.keys(values).map(key => {
      results.push({
        name: key,
        value: values[key],
        color: factionColorSwitch(key),
        legendFontColor: factionColorSwitch(key),
      });
    });
    return results;
  };

  const groupByCost = array => {
    let values = {};
    let results = [];
    array.map(item => {
      values[item.cost] ? (values[item.cost] += 1) : (values[item.cost] = 1);
    });
    Object.keys(values).map(key => {
      results.push({
        key,
        value: values[key],
      });
    });
    return results;
  };

  const groupByStrength = array => {
    let values = {};
    let results = [];
    array.map(item => {
      values[item.strength]
        ? (values[item.strength] += 1)
        : (values[item.strength] = 1);
    });
    Object.keys(values).map(key => {
      results.push({
        key,
        value: values[key],
      });
    });
    return results;
  };

  const groupedFaction = groupByFaction(listOfCards);
  const groupedCost = groupByCost(listOfCards);
  const groupedStrength = groupByStrength(listOfCards);

  const cardsOfType = cardSections.map(item => {
    return item.title;
  });

  const numberOfCardsByType = cardSections.map(item => {
    return item.data.length;
  });

  const numberOfCardsByFactions = groupedFaction.map(item => {
    return item.value;
  });

  const sumValues = numberOfCardsByFactions.reduce((a, b) => {
    return a + b;
  }, 0);

  const percentValues = groupedFaction.map(item => {
    const floatValues = item.value / sumValues;
    const fixedValues = floatValues.toFixed(3);
    const percentageValues = fixedValues * 100;
    return percentageValues.toFixed(2);
  });

  const cardsOfCost = groupedCost.map(item => {
    return item.key;
  });

  const numberOfCardsByCost = groupedCost.map(item => {
    return item.value;
  });

  const cardsOfStrength = groupedStrength.map(item => {
    return item.key;
  });

  const numberOfCardsByStrength = groupedStrength.map(item => {
    return item.value;
  });

  const cardsArray = [
    {
      text: 'TYPES',
      data: {
        labels: cardsOfType,
        datasets: [
          {
            data: numberOfCardsByType,
          },
        ],
      },
    },
    {
      text: 'FACTIONS',
    },
    {
      text: 'COSTS',
      data: {
        labels: cardsOfCost,
        datasets: [
          {
            data: numberOfCardsByCost,
          },
        ],
      },
    },
    {
      text: 'STRENGTHS',
      data: {
        labels: cardsOfStrength,
        datasets: [
          {
            data: numberOfCardsByStrength,
          },
        ],
      },
    },
  ];

  return (
    <View style={styles.container}>
      {!deckDetails || cardSections < 1 ? (
        <View style={{flex: 1, backgroundColor: colors.black}}>
          <Spinner styles={{marginTop: '100%'}} />
        </View>
      ) : !packName && dateCreation ? (
        <View style={{flex: 3}}>
          <Text style={styles.deckTitle}>{deckDetails.name}</Text>
          <Animated.View
            style={[styles.deckDetailsContainer, {height: heightTransform}]}>
            {isHeaderOpen && (
              <>
                <View style={{marginBottom: '80%'}}>
                  <DeckSwiper
                    dataSource={cardsArray}
                    renderItem={item => (
                      <Card
                        style={{
                          height: 300,
                          width: '90%',
                          alignSelf: 'center',
                          borderRadius: 5,
                          backgroundColor: colors.black,
                        }}>
                        <CardItem style={{backgroundColor: theme.primary}}>
                          <Text
                            style={{
                              color: '#000000',
                              fontSize: 15,
                              fontWeight: 'bold',
                            }}>
                            {item.text}
                          </Text>
                        </CardItem>
                        {item.text === 'TYPES' ? (
                          <LineChart
                            data={item.data}
                            width={330}
                            height={250}
                            style={{paddingRight: 40, marginTop: 10}}
                            chartConfig={{
                              propsForLabels: {
                                fontSize: 7,
                              },
                              fillShadowGradient: theme.primary,
                              decimalPlaces: 2,
                              color: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                              labelColor: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                            }}
                            bezier
                          />
                        ) : item.text === 'FACTIONS' ? (
                          <>
                            <PieChart
                              data={groupedFaction}
                              width={750}
                              height={175}
                              hasLegend={false}
                              style={{
                                alignItems: 'center',
                              }}
                              accessor="value"
                              backgroundColor="transparent"
                              chartConfig={{
                                color: () => `rgba(255, 255, 255)`,
                                labelColor: () => `rgba(255, 255, 255)`,
                              }}
                            />
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                marginHorizontal: '3%',
                              }}>
                              {groupedFaction.map((item, index) => (
                                <Text
                                  style={{
                                    color: factionColorSwitch(item.name),
                                  }}>
                                  {' '}
                                  {percentValues[index]}% {item.name}{' '}
                                </Text>
                              ))}
                            </View>
                          </>
                        ) : (
                          <BarChart
                            data={item.data}
                            width={330}
                            height={250}
                            style={{marginTop: 10}}
                            chartConfig={{
                              propsForLabels: {
                                fontSize: 8,
                              },
                              fillShadowGradient: theme.primary,
                              decimalPlaces: 2,
                              color: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                              labelColor: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                            }}
                          />
                        )}
                      </Card>
                    )}
                    onSwipeLeft={() => swipeLeft()}
                    onSwipeRight={() => swipeRight()}
                  />
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                  <Text style={styles.dateCreationDeck}>
                    {format(new Date(dateCreation), 'dd-MM-yyyy')}
                  </Text>
                </View>
              </>
            )}
            <TouchableOpacity
              onPress={() => openHeader()}
              style={styles.iconContainer}>
              <Icon
                name={!isHeaderOpen ? 'chevron-down' : 'chevron-up'}
                size={30}
                color={theme.primary}
              />
            </TouchableOpacity>
          </Animated.View>
          <CardList deck navigation={navigation} cards={cardSections} />
        </View>
      ) : (
        packName && (
          <View style={{flex: 2}}>
            <View style={styles.packDetailsContainer}>
              <View style={styles.headerItemsPackContainer}>
                <View style={styles.packImageContainer}>
                  <PackImage packagesImages={packName} />
                </View>
                <View style={styles.titlePackContainer}>
                  <Text style={styles.packTitle}>{packName}</Text>
                  <Text style={styles.details}> Total {totalCards} </Text>
                  <Button
                    bgColor={colors.mattYellowClear}
                    height="50%"
                    buttonTitle="View On Site"
                    press={() => openUrl()}
                  />
                </View>
              </View>
            </View>
            <CardList navigation={navigation} cards={cardSections} />
          </View>
        )
      )}
    </View>
  );
};

export default Modal;
