import { ADD_FILM_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const addFilmSuccess = film => ({
  type: ADD_FILM_SUCCESS,
  film,
});

export const addFilm = body => async (dispatch) => {
  try {
    const response = await fetch('api/films/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const film = await response.json();
    return dispatch(addFilmSuccess(film));
  } catch (error) {
    switch (error.message) {
      case 'Failed to fetch':
        return dispatch(throwWarning('No internet connection!', 'error'));
      case 'Unexpected token P in JSON at position 0':
        return dispatch(throwWarning('Server is not avaible!', 'error'));
      default:
        return dispatch(throwWarning('Unknown error!', 'error'));
    }
  }
};
