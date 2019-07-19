import { FETCH_FILMS_DATA_SUCCESS, USER_IS_LOGGED_OUT } from '../actionTypes';

const initialState = [];

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_DATA_SUCCESS:
      return action.films;
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default filmsData;
