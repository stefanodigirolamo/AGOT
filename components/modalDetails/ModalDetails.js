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
import {Card} from 'native-base';
import {LineChart, BarChart, PieChart} from 'react-native-chart-kit';
import factionColorSwitch from '../../assets/styles/factionColor';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const Modal = ({navigation}) => {
  const carouselWidth = Dimensions.get('window').width;

  const styles = modalStyles;
  const packName = navigation.state.params.name;
  const totalCards = navigation.state.params.total;
  const URL = navigation.state.params.url;

  const [deckDetails, setDeckDetails] = useState({});
  const [cardSections, setCardSections] = useState([]);
  const [listOfCards, setListOfCards] = useState([]);
  const [isHeaderOpen, setHeaderOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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

  const cardSectionsType = cardSections.filter(
    item => item.title !== 'Agenda' && item.title !== 'Plot',
  );
  const groupedFaction = groupByFaction(listOfCards);
  const groupedCost = groupByCost(listOfCards);
  const filteredGroupCost = groupedCost.filter(item => item.key !== 'null');
  let groupedStrength = groupByStrength(listOfCards);
  groupedStrength.pop();

  const cardsOfType = cardSectionsType.map(item => {
    return item.title;
  });

  const numberOfCardsByType = cardSectionsType.map(item => {
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

  const cardsOfCost = filteredGroupCost.map(item => {
    return item.key;
  });

  const numberOfCardsByCost = filteredGroupCost.map(item => {
    return item.value;
  });

  const cardsOfStrength = groupedStrength.map(item => {
    let strengthKey = item.key;
    if (strengthKey === 'null') {
      return (strengthKey = '0');
    }
    return strengthKey;
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
                <View style={{marginTop: 110}}>
                  <Carousel
                    data={cardsArray}
                    sliderWidth={carouselWidth}
                    itemWidth={carouselWidth}
                    renderItem={obj => (
                      <Card
                        transparent
                        style={{
                          height: 280,
                          width: '100%',
                          alignSelf: 'center',
                          borderRadius: 5,
                          backgroundColor: colors.black,
                        }}>
                        {obj.item.text === 'TYPES' ? (
                          <LineChart
                            data={obj.item.data}
                            width={400}
                            height={260}
                            style={{marginTop: 25}}
                            chartConfig={{
                              propsForLabels: {
                                fontSize: 10,
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
                        ) : obj.item.text === 'FACTIONS' ? (
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <View
                              style={{
                                width: '50%',
                                paddingLeft: '5%',
                                marginTop: '10%',
                              }}>
                              <PieChart
                                data={groupedFaction}
                                width={320}
                                height={200}
                                hasLegend={false}
                                accessor="value"
                                backgroundColor="transparent"
                                chartConfig={{
                                  color: () => `rgba(255, 255, 255)`,
                                  labelColor: () => `rgba(255, 255, 255)`,
                                }}
                              />
                            </View>

                            <View
                              style={{
                                width: '50%',
                                marginTop: '20%',
                              }}>
                              {groupedFaction.map((item, index) => (
                                <Text
                                  style={{
                                    color: factionColorSwitch(item.name),
                                    fontWeight: 'bold',
                                  }}>
                                  {' '}
                                  {percentValues[index]}% {item.name}{' '}
                                </Text>
                              ))}
                            </View>
                          </View>
                        ) : (
                          <>
                            <Text
                              style={{
                                color: theme.secondary,
                                fontWeight: 'bold',
                                marginLeft: '2%',
                                marginTop: '5%'
                              }}>
                              {' '}
                              {obj.item.text}{' '}
                            </Text>
                            <BarChart
                              data={obj.item.data}
                              width={360}
                              height={230}
                              style={{
                                marginTop: 15,
                                alignSelf: 'center',
                                marginRight: 35,
                              }}
                              chartConfig={{
                                propsForLabels: {
                                  fontSize: 10,
                                },
                                fillShadowGradient: theme.primary,
                                decimalPlaces: 2,
                                color: (opacity = 1) =>
                                  `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) =>
                                  `rgba(255, 255, 255, ${opacity})`,
                              }}
                            />
                          </>
                        )}
                      </Card>
                    )}
                    onSnapToItem={index => setActiveSlide(index)}
                  />
                </View>
                <View style={{height: '16%'}}>
                  <Pagination
                    activeDotIndex={activeSlide}
                    dotsLength={cardsArray.length}
                    dotStyle={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      marginHorizontal: 8,
                      backgroundColor: theme.primary,
                    }}
                    inactiveDotStyle={{
                      backgroundColor: theme.secondary,
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
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
