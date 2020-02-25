import {
  GET_ALL_CARDS,
  GET_CARD,
  GET_SECTIONS_CARDS as GET_SECTIONS,
} from '../actions/types';

const initialState = {
  allCards: [],
  sections: [],
  card: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CARDS:
      return {...state, allCards: action.payload};
    case GET_CARD:
      return {...state, card: action.payload};
    case GET_SECTIONS:
      return {...state, sections: action.payload};
    default:
      return state;
  }
}
