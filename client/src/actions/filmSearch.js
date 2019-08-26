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
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
