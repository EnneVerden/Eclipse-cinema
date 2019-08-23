import { FETCH_DESIRED_FILM } from '../actionTypes';
import { throwWarning } from './throwWarning';

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
      return dispatch(throwWarning(response.statusText, 'error'));
    }

    const film = await response.json();
    return dispatch(getDesiredFilmSuccess(film));
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
