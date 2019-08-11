import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const fetchUserDataSuccess = user => ({
  type: FETCH_USER_DATA_SUCCESS,
  user,
});

export const fetchUserData = (email, password) => async (dispatch) => {
  try {
    const response = await fetch('api/users/getUser', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        email,
        password,
      },
    });

    if (response.status === 400) {
      return dispatch(throwError(response.statusText));
    }

    const user = await response.json();
    localStorage.setItem('token', user._id);
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
