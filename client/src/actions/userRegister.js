import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const sendUserDataSuccess = user => ({
  type: FETCH_USER_DATA_SUCCESS,
  user,
});

export const sendUserData = body => async (dispatch) => {
  try {
    const response = await fetch('api/users/addUser', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (response.status === 400) {
      return dispatch(throwError(response.statusText));
    }

    const user = await response.json();
    localStorage.setItem('token', user._id);
    return dispatch(sendUserDataSuccess(user));
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
