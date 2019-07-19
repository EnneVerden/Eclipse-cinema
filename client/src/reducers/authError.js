import { THROW_AUTHENTICATION_ERROR, USER_IS_LOGGED_OUT } from '../actionTypes';

const initialState = {
  error: '',
};

const authError = (state = initialState, action) => {
  switch (action.type) {
    case THROW_AUTHENTICATION_ERROR:
      return { ...state, error: action.errorText };
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authError;
