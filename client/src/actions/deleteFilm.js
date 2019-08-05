import { DELETE_FILM_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const deleteFilmSuccess = deletedFilmID => ({
  type: DELETE_FILM_SUCCESS,
  deletedFilmID,
});

export const deleteFilm = url => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });

    const deletedFilmID = await response.json();
    return dispatch(deleteFilmSuccess(deletedFilmID._id));
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
