import { FETCH_FILMS_DATA_WITH_PAGE_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

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
        return dispatch(throwError('No internet connection!'));
      case 'Unexpected token P in JSON at position 0':
        return dispatch(throwError('Server is not avaible!'));
      default:
        return dispatch(throwError('Unknown error!'));
    }
  }
};
