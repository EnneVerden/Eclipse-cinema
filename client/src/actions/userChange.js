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
    dispatch(changeUserDataSuccess(newUserData));
    return dispatch(throwWarning('Information changed successfully!', 'success'));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
