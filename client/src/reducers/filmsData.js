import {
  FETCH_FILMS_DATA_SUCCESS,
  ADD_FILM_SUCCESS,
  DELETE_FILM_SUCCESS,
  USER_IS_LOGGED_OUT,
} from '../actionTypes';

const initialState = [];

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_DATA_SUCCESS:
      return action.films;
    case ADD_FILM_SUCCESS:
      return [...state, action.film];
    case DELETE_FILM_SUCCESS:
      return state.filter(item => item._id !== action.deletedFilmID);
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default filmsData;
