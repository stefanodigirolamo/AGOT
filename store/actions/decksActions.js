import {
  GET_DAILY_DECKS,
  GET_WEEK_DECKS,
  GET_CARDS_DECK,
  GET_DECK_DETAILS,
} from './types';
import decklists from '../../interceptors/decklistInterceptor';
import {format} from 'date-fns';
import deckDetails from '../../interceptors/deckDetailsInterceptor';

const today = format(new Date(), 'yyyy-MM-dd');

export function getDailyDecksAction() {
  return async dispatch => {
    try {
      const decks = await decklists.get(`2020-02-24.json`);

      const dailyDecks = decks.data.map(deck => {
        return {
          id: deck.id,
          title: deck.name,
          dateUpdt: deck.date_update,
          faction: deck.faction_name,
          description: deck.description_md,
          joust: deck.isLegalForJoust,
          melee: deck.isLegalForMelee,
        };
      });

      return dispatch({
        type: GET_DAILY_DECKS,
        payload: dailyDecks,
      });
    } catch (error) {
      return undefined;
    }
  };
}

export function getWeeklyDecksAction(day) {
  return async dispatch => {
    try {
      const decks = await decklists.get(`${day}.json`);

      const weeklyDecks = decks.data.map(deck => {
        return (
          deck && {
            id: deck.id,
            title: deck.name,
            dateUpdt: deck.date_update,
            faction: deck.faction_name,
            description: deck.description_md,
            joust: deck.isLegalForJoust,
            melee: deck.isLegalForMelee,
          }
        );
      });

      return dispatch({
        type: GET_WEEK_DECKS,
        payload: weeklyDecks,
      });
    } catch (error) {
      return undefined;
    }
  };
}

export function getDeckDetailsAction(id) {
  return async dispatch => {
    try {
      const {data} = await deckDetails.get(`${id}.json`);
      console.log(data);

      return dispatch({
        type: GET_DECK_DETAILS,
        payload: data,
      });
    } catch (error) {
      return undefined;
    }
  };
}

export function getSlotsOfDeckAction(id) {
  return async dispatch => {
    try {
      const {data} = await deckDetails.get(`${id}.json`);
      const slots = Object.keys(data.slots);
      console.log(slots);

      return dispatch({
        type: GET_DECK_DETAILS,
        payload: slots,
      });
    } catch (error) {
      return undefined;
    }
  };
}

export function getCardsOfDeckAction() {
  return async dispatch => {
    const decks = await decklists.get(`${today}.json`);
    const cards = decks.data.map(deck => {
      return {
        id: deck.id,
        slot: deck.slots,
      };
    });

    return dispatch({
      type: GET_CARDS_DECK,
      payload: cards,
    });
  };
}
