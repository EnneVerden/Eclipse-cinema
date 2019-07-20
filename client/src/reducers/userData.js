import {
  FETCH_USER_DATA_SUCCESS,
  SEND_USER_DATA_SUCCESS,
  CHANGE_USER_NAME_SUCCESS,
  USER_IS_LOGGED_OUT,
} from '../actionTypes';

const initialState = {};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return action.user;
    case SEND_USER_DATA_SUCCESS:
      return action.user;
    case CHANGE_USER_NAME_SUCCESS:
      return { ...state, fullName: action.newName };
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default userData;
