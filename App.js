import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './screens/home/Home';
import Cards from './screens/cards/Cards';
import DecksList from './screens/decksList/DecksList';
import MyDecks from './screens/myDecks/MyDecks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from './utils/Background';
import Header from './components/header/Header';
import Modal from './components/modalDetails/ModalDetails';
import Card from './components/cardDetails/CardDetails';

const App = () => (
  <>
    <Background>
      <Header />
    </Background>
    <AppNavigator />
  </>
);

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
          opacity: 0.94,
        },
      }),
    },
    Card: {
      screen: Card,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: '#000000',
          opacity: 0.94,
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
        paddingBottom: 10,
      },
    },
    initialRouteName: 'Home',
  },
);

const AppNavigator = createAppContainer(tabNavigator);

export default App;
