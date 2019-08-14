import { FETCH_DESIRED_FILM } from '../actionTypes';
import { throwError } from './throwError';

export const getDesiredFilmSuccess = film => ({
  type: FETCH_DESIRED_FILM,
  film,
});

export const getDesiredFilm = filmName => async (dispatch) => {
  try {
    const response = await fetch('api/films/get', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Film-name': filmName,
      },
    });

    if (response.status === 400) {
      return dispatch(throwError(response.statusText));
    }

    const film = await response.json();
    return dispatch(getDesiredFilmSuccess(film));
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
