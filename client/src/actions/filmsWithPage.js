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
