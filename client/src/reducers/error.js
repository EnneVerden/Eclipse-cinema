import {
  THROW_ERROR,
  CAUSE_ERROR_RESET,
  USER_IS_LOGGED_OUT,
} from '../actionTypes';

const initialState = {
  errorText: '',
};

const authError = (state = initialState, action) => {
  switch (action.type) {
    case THROW_ERROR:
      return { errorText: action.error };
    case CAUSE_ERROR_RESET:
      return initialState;
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authError;
