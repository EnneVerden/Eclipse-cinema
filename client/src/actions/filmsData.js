import { FETCH_FILMS_DATA_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const fetchFilmsDataSuccess = films => ({
  type: FETCH_FILMS_DATA_SUCCESS,
  films,
});

export const fetchFilmsData = () => async (dispatch) => {
  try {
    const response = await fetch('/api/films/get');
    const films = await response.json();

    return dispatch(fetchFilmsDataSuccess(films));
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
