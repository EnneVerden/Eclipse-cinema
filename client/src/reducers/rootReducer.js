import { combineReducers } from 'redux';

import userData from './userData';
import authError from './authError';
import filmsData from './filmsData';

const rootReducer = combineReducers({ userData, authError, filmsData });

export default rootReducer;
