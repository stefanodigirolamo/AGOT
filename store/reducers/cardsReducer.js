import {
  GET_CARD,
  GET_CARDS,
  GET_SECTIONS_CARDS as GET_SECTIONS,
} from '../actions/types';

const initialState = {
  cards: [],
  sections: [],
  card: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {...state, cards: action.payload};
    case GET_CARD:
      return {...state, card: action.payload};
    case GET_SECTIONS:
      return {...state, sections: action.payload};
    default:
      return state;
  }
}
