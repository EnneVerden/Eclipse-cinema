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
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
