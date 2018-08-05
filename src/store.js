import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger'

import counterReducer from './reducers/counterReducer';

const reducers = combineReducers({
  counter: counterReducer
});

const logger = createLogger({
  predicate: (getState, action) => {
  	let shouldLog = (action.type === 'ADD');
    return shouldLog;
  },
  stateTransformer: (state) => state.toJS(),
  collapsed: true
});

const middleware = applyMiddleware(logger);

export default createStore(reducers, middleware);
