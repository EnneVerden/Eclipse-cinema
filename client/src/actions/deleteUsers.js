import { DELETE_USERS_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const deleteUsersSuccess = users => ({
  type: DELETE_USERS_SUCCESS,
  users,
});

export const deleteUsers = body => async (dispatch) => {
  try {
    const response = await fetch('api/users/delete', {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const users = await response.json();
    return dispatch(deleteUsersSuccess(users._id));
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
