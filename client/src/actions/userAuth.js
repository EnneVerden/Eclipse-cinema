import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const fetchUserDataSuccess = user => ({
  type: FETCH_USER_DATA_SUCCESS,
  user,
});

export const fetchUserData = (email, password) => async (dispatch) => {
  try {
    const response = await fetch('api/users/get', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Email: email,
        Password: password,
      },
    });

    if (response.status === 400) {
      return dispatch(throwWarning(response.statusText, 'error'));
    }

    const user = await response.json();
    localStorage.setItem('token', user._id);
    return dispatch(fetchUserDataSuccess(user));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
