import {
  GET_DAILY_DECKS,
  GET_WEEK_DECKS,
  GET_CARDS_DECK,
  GET_DECK_DETAILS,
  GET_SLOTS,
} from '../actions/types';

const initialState = {
  dailyDecks: [],
  weeklyDecks: [],
  deckDetails: {},
  slots: [],
  cardsOfDeck: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DAILY_DECKS:
      return {...state, dailyDecks: action.payload};
    case GET_WEEK_DECKS:
      return {...state, weeklyDecks: action.payload};
    case GET_DECK_DETAILS:
      return {...state, deckDetails: action.payload};
    case GET_SLOTS:
      return {...state, slots: action.payload};
    case GET_CARDS_DECK:
      return {...state, cardsOfDeck: action.payload};
    default:
      return state;
  }
}
