import { DELETE_USERS_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const deleteUsersSuccess = users => ({
  type: DELETE_USERS_SUCCESS,
  users,
});

export const deleteUsers = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const users = await response.json();
    return dispatch(deleteUsersSuccess(users._id));
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
