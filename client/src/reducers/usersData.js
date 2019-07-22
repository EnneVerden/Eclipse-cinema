import { FETCH_USERS_DATA_SUCCESS, USER_IS_LOGGED_OUT } from '../actionTypes';

const initialState = [];

const usersData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_DATA_SUCCESS:
      return action.users;
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default usersData;
