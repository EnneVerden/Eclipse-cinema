import { CHANGE_USER_DATA_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const changeUserDataSuccess = newUserData => ({
  type: CHANGE_USER_DATA_SUCCESS,
  newUserData,
});

export const changeUserData = (userID, body) => async (dispatch) => {
  try {
    const response = await fetch(`api/users/${userID}/change`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (response.status === 400) {
      return dispatch(throwWarning(response.statusText, 'error'));
    }

    const newUserData = await response.json();
    return dispatch(changeUserDataSuccess(newUserData));
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
