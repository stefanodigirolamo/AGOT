import React, {useState} from 'react';
import {Dimensions, View, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Card} from 'native-base';
import {LineChart, PieChart} from 'react-native-chart-kit';
import factionColorSwitch from '../../../assets/styles/factionColor';
import {theme} from '../../../assets/styles/theme';
import styles from './graphCarouselStyles';

const GraphCarousel = ({cardSections, listOfCards}) => {
  const carouselWidth = Dimensions.get('window').width;
  const [activeSlide, setActiveSlide] = useState(0);

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

  const fixYValue = yValue => {
    return parseInt(yValue).toFixed(0);
  };

  return (
    <>
      <View style={styles.carouselContainer}>
        <Carousel
          loop={true}
          data={cardsArray}
          sliderWidth={carouselWidth}
          itemWidth={carouselWidth}
          renderItem={obj => (
            <Card transparent style={styles.cardContainer}>
              {obj.item.text === 'TYPES' ? (
                <LineChart
                  formatYLabel={value => fixYValue(value)}
                  data={obj.item.data}
                  width={400}
                  height={285}
                  style={styles.typeLinechart}
                  chartConfig={{
                    propsForLabels: {
                      fontSize: 10,
                    },
                    fillShadowGradient: theme.primary,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                  }}
                  bezier
                />
              ) : obj.item.text === 'FACTIONS' ? (
                <View style={styles.factionsCardContainer}>
                  <View style={styles.pieChart}>
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

                  <View style={styles.containerTextPiedChart}>
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
                  <Text style={styles.costText}>{obj.item.text}</Text>
                  <LineChart
                    formatYLabel={value => fixYValue(value)}
                    data={obj.item.data}
                    width={400}
                    height={250}
                    style={styles.costStrengthChart}
                    chartConfig={{
                      propsForLabels: {
                        fontSize: 10,
                      },
                      backgroundColor: theme.primary,
                      fillShadowGradient: theme.primary,
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
      <View style={styles.dotsContainer}>
        <Pagination
          activeDotIndex={activeSlide}
          dotsLength={cardsArray.length}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={{
            backgroundColor: theme.secondary,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </>
  );
};

export default GraphCarousel;
