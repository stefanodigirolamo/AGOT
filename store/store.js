import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

export default store;
