import {
  FETCH_USERS_DATA_SUCCESS,
  REMOVE_USERS_SUCCESS,
  USER_IS_LOGGED_OUT,
} from '../actionTypes';

const initialState = [];

const usersData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_DATA_SUCCESS:
      return action.users;
    case REMOVE_USERS_SUCCESS:
      return state.filter(item => !action.users.includes(item._id));
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default usersData;
