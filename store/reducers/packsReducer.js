import {GET_PACKS, GET_CARDS_PACK} from '../actions/types';

const initialState = {
  packs: [],
  packCards: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PACKS:
      return {...state, packs: action.payload};
    case GET_CARDS_PACK:
      return {...state, packCards: action.payload};
    default:
      return state;
  }
}
