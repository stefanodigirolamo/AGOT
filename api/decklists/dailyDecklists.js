import decklists from '../../interceptors/decklistInterceptor';
import {format} from 'date-fns';

const today = format(new Date(), 'yyyy-MM-dd');

export const getDailyDecklists = async () => {
  const decks = await decklists.get(`${today}.json`);

  const dailyDecks = decks.data.map(deck => {
    return {
      id: deck.id,
      title: deck.name,
      dateUpdt: deck.date_update,
      faction: deck.faction_name,
      joust: deck.isLegalForJoust,
      melee: deck.isLegalForMelee,
    };
  });

  return dailyDecks;
};

export const getCardsOfDeck = async () => {
  const decks = await decklists.get(`${today}.json`);
  const cards = decks.data.map(deck => {
    return {
      id: deck.id,
      slot: deck.slots,
    };
  });

  return cards;
};
