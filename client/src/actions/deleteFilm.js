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
