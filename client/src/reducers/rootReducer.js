import { combineReducers } from 'redux';

import userData from './userData';
import authError from './authError';

const rootReducer = combineReducers({ userData, authError });

export default rootReducer;
