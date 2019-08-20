import { combineReducers } from 'redux';

import userData from './userData';
import filmsData from './filmsData';
import filmsPerPage from './filmsPerPage';
import usersData from './usersData';
import search from './search';
import orders from './orders';
import error from './error';

const rootReducer = combineReducers({
  userData,
  filmsData,
  filmsPerPage,
  usersData,
  search,
  orders,
  error,
});

export default rootReducer;
