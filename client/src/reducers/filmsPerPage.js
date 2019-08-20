import {
  FETCH_FILMS_DATA_WITH_PAGE_SUCCESS,
  USER_IS_LOGGED_OUT,
} from '../actionTypes';

const initialState = {};

const filmsPerPage = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_DATA_WITH_PAGE_SUCCESS:
      return action.data;
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default filmsPerPage;
