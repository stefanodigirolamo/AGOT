import decklists from '../../interceptors/decklistInterceptor';
import { format } from 'date-fns';

const today = format(new Date(), 'yyyy-MM-dd');

export const getDailyDecklists = async () => {
  try {
    const decks = await decklists.get(`2020-01-14.json`)

    const dailyDecks = decks.data.map(deck => {
      return {
        id: deck.id,
        title: deck.name,
        dateUpdt: deck.date_update,
        faction: deck.faction_name,
        description: deck.description_md,
        joust: deck.isLegalForJoust,
        melee: deck.isLegalForMelee
      }
    })
    return dailyDecks;
  } catch (error) {
    console.log(error)
  }
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
