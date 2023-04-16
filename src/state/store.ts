import { createStore, applyMiddleware } from 'redux';
import repoReducers from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(
  repoReducers,
  {},
  applyMiddleware(thunk),
);
