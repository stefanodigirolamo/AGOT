import React, {useState, useEffect, useCallback} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {View} from 'react-native';
import Home from './screens/home/Home';
import Cards from './screens/cards/Cards';
import DecksList from './screens/decksList/DecksList';
import MyDecks from './screens/myDecks/MyDecks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from './utils/Background';
import Modal from './components/modalDetails/ModalDetails';
import Card from './components/cardDetails/CardDetails';
import Filtered from './screens/cards/filteredCardsList/FilteredCardsList';
import {getAllCardsList} from './api/cardsApi/cardsApi';
import Spinner from './utils/spinner/Spinner';

export const Context = React.createContext([]);

const App = () => {
  const [cards, setCards] = useState([]);

  const getAllCards = useCallback(async () => {
    try {
      const cardsList = await getAllCardsList();
      setCards(cardsList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  return (
    <>
      {cards.length > 0 ? (
        <Context.Provider value={cards}>
          <Background />
          <AppNavigator />
        </Context.Provider>
      ) : (
        <View style={{backgroundColor: '#000000'}}>
          <Spinner />
        </View>
      )}
    </>
  );
};

const homeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }),
    },
    Modal: {
      screen: Modal,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: '#000000',
        },
      }),
    },
    Card: {
      screen: Card,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: '#000000',
        },
      }),
    },
  },
  {headerMode: 'none'},
);

const cardsStack = createStackNavigator(
  {
    Cards: {
      screen: Cards,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }),
    },
    Filtered: {
      screen: Filtered,
    },
  },
  {headerMode: 'none'},
);

const deckListStack = createStackNavigator(
  {
    Deckslist: {
      screen: DecksList,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }),
    },
  },
  {headerMode: 'none'},
);

const myDecksStacks = createStackNavigator(
  {
    MyDecks: {
      screen: MyDecks,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }),
    },
  },
  {headerMode: 'none'},
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Icon;
  switch (routeName) {
    case 'Home':
      return (
        <IconComponent name="shield-home-outline" size={30} color={tintColor} />
      );
    case 'Cards':
      return <IconComponent name="cards-outline" size={30} color={tintColor} />;
    case 'Decklist':
      return <IconComponent name="archive" size={30} color={tintColor} />;
    case 'MyDecks':
      return (
        <IconComponent
          name="shield-account-outline"
          size={30}
          color={tintColor}
        />
      );
    default:
      return null;
  }
};

const tabNavigator = createBottomTabNavigator(
  {
    Home: {screen: homeStack},
    Cards: {screen: cardsStack},
    Decklist: {screen: deckListStack},
    MyDecks: {screen: myDecksStacks},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#ffc533',
      inactiveTintColor: '#c2a67f',
      style: {
        backgroundColor: '#000000',
        height: 65,
      },
    },
    resetOnBlur: true,
    initialRouteName: 'Home',
  },
);

const AppNavigator = createAppContainer(tabNavigator);

export default App;
