import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/home/Home';
import Cards from './screens/cards/Cards';
import DecksList from './screens/decksList/DecksList';
import MyDecks from './screens/myDecks/MyDecks'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const App = () => (
  <>
    <AppNavigator />
  </>
)

const homeStack = createStackNavigator(
  { Home: { screen: Home } },
  { headerMode: 'none' }
)

const cardsStack = createStackNavigator(
  { Card: { screen: Cards } },
  { headerMode: 'none' }
)

const deckListStack = createStackNavigator(
  { Deck: { screen: DecksList } },
  { headerMode: 'none' }
)

const myDecksStacks = createStackNavigator(
  { MyDecks: { screen: MyDecks } },
  { headerMode: 'none' }
)

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  switch (routeName) {
    case 'Home': return <IconComponent name='shield-home-outline' size={30} color={tintColor} />
    case 'Cards': return <IconComponent name='cards-outline' size={30} color={tintColor} />
    case 'Decklist': return <IconComponent name='archive' size={30} color={tintColor} />
    case 'MyDecks': return <IconComponent name='shield-account-outline' size={30} color={tintColor} />
    default: return null
  }
};

const tabNavigator = createBottomTabNavigator(
  {
    Home: { screen: homeStack },
    Cards: { screen: cardsStack },
    Decklist: { screen: deckListStack },
    MyDecks: { screen: myDecksStacks }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
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
  }
)

const AppNavigator = createAppContainer(tabNavigator)

export default App;
