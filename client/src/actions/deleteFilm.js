import { DELETE_FILM_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const deleteFilmSuccess = deletedFilmID => ({
  type: DELETE_FILM_SUCCESS,
  deletedFilmID,
});

export const deleteFilm = filmID => async (dispatch) => {
  try {
    const response = await fetch(`api/films/${filmID}/delete`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });

    const deletedFilmID = await response.json();
    return dispatch(deleteFilmSuccess(deletedFilmID._id));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
