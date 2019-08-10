import { CHANGE_FILM_DATA_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const changeFilmSuccess = film => ({
  type: CHANGE_FILM_DATA_SUCCESS,
  film,
});

export const changeFilm = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const film = await response.json();

    return dispatch(changeFilmSuccess(film));
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
