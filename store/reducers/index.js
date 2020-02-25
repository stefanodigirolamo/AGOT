import cardsReducer from './cardsReducer';
import decksReducer from './decksReducer';
import {combineReducers} from 'redux';
import packsReducer from './packsReducer';

const rootReducer = combineReducers({
  cardsReducer: cardsReducer,
  decksReducer: decksReducer,
  packsReducer: packsReducer,
});

export default rootReducer;
