import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevtools } from 'redux-devtools-extension';

import rootReducer from '../Reducers';
import logger from 'redux-logger';

export default function configureStore(preloadedState={}){
  const middlewares = [promiseMiddleware(), thunkMiddleware, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
