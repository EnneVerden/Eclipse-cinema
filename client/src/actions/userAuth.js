import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const fetchUserDataSuccess = user => ({
  type: FETCH_USER_DATA_SUCCESS,
  user,
});

export const fetchUserData = url => async (dispatch) => {
  try {
    const response = await fetch(url);

    if (response.status === 400) {
      return dispatch(throwError(response.statusText));
    }

    const user = await response.json();
    return dispatch(fetchUserDataSuccess(user));
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
