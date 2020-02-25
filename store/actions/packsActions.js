import {GET_PACKS, GET_CARDS_PACK} from './types';
import packs from '../../interceptors/packsInterceptor';
import cards from '../../interceptors/cardsInterceptor';

export function getPacksAction() {
  return async dispatch => {
    const packages = await packs.get();

    const packsList = packages.data.reverse();

    return dispatch({
      type: GET_PACKS,
      payload: packsList,
    });
  };
}

export function getPackCardsAction(id) {
  return async dispatch => {
    try {
      const {data} = await cards.get(`${id}.json`);
      return dispatch({
        type: GET_CARDS_PACK,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);

      return undefined;
    }
  };
}
