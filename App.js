import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {StatusBar} from 'react-native';
import Home from './src/screens/home/Home';
import Cards from './src/screens/cards/Cards';
import DecksList from './src/screens/decksList/DecksList';
import MyDecks from './src/screens/myDecks/MyDecks';
import Modal from './src/components/modalDetails/ModalDetails';
import Card from './src/components/cardDetails/CardDetails';
import Filtered from './src/screens/cards/filteredCardsList/FilteredCardsList';
import Spinner from './utils/spinner/Spinner';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from './utils/background/Background';
import {theme, colors} from './assets/styles/theme';
import {HideNavigationBar} from 'react-native-navigation-bar-color';
import {getCardsAction} from './store/actions/cardsActions';

const App = ({cards, getCards}) => {
  useEffect(() => {
    HideNavigationBar;
    cards.length <= 0 && getCards();
  }, [cards, getCards]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      {cards.length > 0 ? (
        <>
          <Background />
          <AppNavigator />
        </>
      ) : (
        <Spinner spinnerStyles={{marginTop: '100%'}} />
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
          backgroundColor: colors.black,
        },
      }),
    },
    Card: {
      screen: Card,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: colors.black,
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
    Card: {
      screen: Card,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: colors.black,
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
    Modal: {
      screen: Modal,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: colors.black,
        },
      }),
    },
    Card: {
      screen: Card,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: colors.black,
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
      activeTintColor: theme.primary,
      inactiveTintColor: theme.secondary,
      style: {
        backgroundColor: colors.black,
        height: 65,
      },
    },
    resetOnBlur: true,
    initialRouteName: 'Home',
  },
);

const AppNavigator = createAppContainer(tabNavigator);

const mapStateToProps = state => {
  return {
    cards: state.cardsReducer.cards,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  getCards: () => dispatch(getCardsAction()),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(App);
