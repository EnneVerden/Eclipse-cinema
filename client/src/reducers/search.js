import { FETCH_DESIRED_FILM, USER_IS_LOGGED_OUT } from '../actionTypes';

const initialState = {
  desiredFilm: {},
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESIRED_FILM:
      return { ...state, desiredFilm: action.film };
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default search;
