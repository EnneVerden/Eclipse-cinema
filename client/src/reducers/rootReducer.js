import { combineReducers } from 'redux';

import userData from './userData';
import authError from './authError';
import filmsData from './filmsData';
import usersData from './usersData';

const rootReducer = combineReducers({
  userData,
  authError,
  filmsData,
  usersData,
});

export default rootReducer;
