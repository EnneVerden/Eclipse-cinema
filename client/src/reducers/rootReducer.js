import { combineReducers } from 'redux';

import userData from './userData';
import filmsData from './filmsData';
import usersData from './usersData';
import error from './error';

const rootReducer = combineReducers({
  userData,
  filmsData,
  usersData,
  error,
});

export default rootReducer;
