import { combineReducers } from 'redux';
import repoReducer from '../reducer/repositoriesReducer';

const reducers = combineReducers({
  repositories: repoReducer,
});

export default reducers;
