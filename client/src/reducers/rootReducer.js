import { combineReducers } from 'redux';

import userData from './userData';
import filmsData from './filmsData';
import usersData from './usersData';
import search from './search';
import orders from './orders';
import error from './error';

const rootReducer = combineReducers({
  userData,
  filmsData,
  usersData,
  search,
  orders,
  error,
});

export default rootReducer;
