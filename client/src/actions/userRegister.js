import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

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
      return dispatch(throwWarning(response.statusText, 'error'));
    }

    const user = await response.json();
    localStorage.setItem('token', user._id);
    return dispatch(sendUserDataSuccess(user));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
