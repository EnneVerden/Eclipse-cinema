import { THROW_AUTHENTICATION_ERROR } from '../actionTypes';

const initialState = {
  error: '',
};

const authError = (state = initialState, action) => {
  switch (action.type) {
    case THROW_AUTHENTICATION_ERROR:
      return { ...state, error: action.errorText };
    default:
      return state;
  }
};

export default authError;
