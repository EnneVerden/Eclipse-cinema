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
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
