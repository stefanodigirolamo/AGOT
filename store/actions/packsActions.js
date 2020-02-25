import {GET_PACKS} from './types';
import packs from '../../interceptors/packsInterceptor';

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
