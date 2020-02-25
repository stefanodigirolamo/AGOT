import {
  GET_DAILY_DECKS,
  GET_WEEK_DECKS,
  GET_CARDS_DECK,
  GET_DECK_DETAILS,
  GET_SLOTS,
} from './types';
import decklists from '../../interceptors/decklistInterceptor';
import {format, subDays, eachDayOfInterval} from 'date-fns';
import deckDetails from '../../interceptors/deckDetailsInterceptor';
import card from '../../interceptors/cardInterceptor';

const today = format(new Date(), 'yyyy-MM-dd');

export function getDailyDecksAction() {
  return async dispatch => {
    try {
      const decks = await decklists.get(`${today}.json`);

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

export function getWeeklyDecksAction() {
  const firstDayWeek = subDays(new Date(), 7);

  const week = eachDayOfInterval({
    start: new Date(firstDayWeek),
    end: new Date(),
  });

  const formattedWeek = week.map(item => format(new Date(item), 'yyyy-MM-dd'));
  return async dispatch => {
    try {
      const details = await Promise.all(
        formattedWeek.map(day => decklists.get(`${day}.json`)),
      );

      const decks = details.map(item => item.data);
      const decksArray = [].concat.apply([], decks);

      const weeklyDecks = decksArray.map(deck => {
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

      return dispatch({
        type: GET_DECK_DETAILS,
        payload: data,
      });
    } catch (error) {
      return undefined;
    }
  };
}

export function getDeckSlotsAction(id) {
  return async dispatch => {
    try {
      const {data} = await deckDetails.get(`${id}.json`);
      const slots = Object.keys(data.slots);

      return dispatch({
        type: GET_SLOTS,
        payload: slots,
      });
    } catch (error) {
      return undefined;
    }
  };
}

export function getDeckCardsAction(slotsArray) {
  return async dispatch => {
    try {
      const array = await Promise.all(
        slotsArray.length > 0 && slotsArray.map(id => card.get(`${id}.json`)),
      );

      const cards = array.map(item => item.data);

      return dispatch({
        type: GET_CARDS_DECK,
        payload: cards,
      });
    } catch (error) {
      return undefined;
    }
  };
}
