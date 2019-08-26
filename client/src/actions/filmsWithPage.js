import { FETCH_FILMS_DATA_WITH_PAGE_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const fetchFilmsDataWithPageSuccess = data => ({
  type: FETCH_FILMS_DATA_WITH_PAGE_SUCCESS,
  data,
});

export const fetchFilmsDataWithPage = pageNumber => async (dispatch) => {
  try {
    const response = await fetch(`api/films/get/?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();

    return dispatch(fetchFilmsDataWithPageSuccess(data));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
