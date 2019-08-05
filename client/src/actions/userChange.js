import { CHANGE_USER_DATA_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const changeUserDataSuccess = newUserData => ({
  type: CHANGE_USER_DATA_SUCCESS,
  newUserData,
});

export const changeUserData = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const newUserData = await response.json();
    return dispatch(changeUserDataSuccess(newUserData));
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
