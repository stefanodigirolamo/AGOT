import {GET_PACKS} from '../actions/types';

const initialState = {
  packs: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PACKS:
      return {...state, packs: action.payload};
    default:
      return state;
  }
}
