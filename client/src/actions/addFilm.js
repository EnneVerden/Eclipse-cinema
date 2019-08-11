import { ADD_FILM_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

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
        return dispatch(throwError('No internet connection!'));
      case 'Unexpected token P in JSON at position 0':
        return dispatch(throwError('Server is not avaible!'));
      default:
        return dispatch(throwError('Unknown error!'));
    }
  }
};
