import { CHANGE_FILM_DATA_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const changeFilmSuccess = film => ({
  type: CHANGE_FILM_DATA_SUCCESS,
  film,
});

export const changeFilm = (filmID, body) => async (dispatch) => {
  try {
    const response = await fetch(`api/films/${filmID}/change`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const film = await response.json();

    return dispatch(changeFilmSuccess(film));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
