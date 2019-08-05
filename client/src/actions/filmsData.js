import { FETCH_FILMS_DATA_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const fetchFilmsDataSuccess = films => ({
  type: FETCH_FILMS_DATA_SUCCESS,
  films,
});

export const fetchFilmsData = url => async (dispatch) => {
  try {
    const response = await fetch(url);
    const films = await response.json();

    return dispatch(fetchFilmsDataSuccess(films));
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
