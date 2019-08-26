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
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
