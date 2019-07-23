import { DELETE_FILM_SUCCESS } from '../actionTypes';

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

    dispatch(deleteFilmSuccess(deletedFilmID._id));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
