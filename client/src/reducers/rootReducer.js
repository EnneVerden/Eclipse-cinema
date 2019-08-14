import { combineReducers } from 'redux';

import userData from './userData';
import filmsData from './filmsData';
import usersData from './usersData';
import search from './search';
import error from './error';

const rootReducer = combineReducers({
  userData,
  filmsData,
  usersData,
  search,
  error,
});

export default rootReducer;
