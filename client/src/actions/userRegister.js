import { SEND_USER_DATA_SUCCESS } from '../actionTypes';
import throwAuthError from './authError';

export const sendUserDataSuccess = user => ({
  type: SEND_USER_DATA_SUCCESS,
  user,
});

export const sendUserData = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const user = await response.json();
    if (user !== false) {
      dispatch(sendUserDataSuccess(user));
    } else {
      dispatch(throwAuthError('User with this email already exists'));
    }
  } catch (error) {
    console.log(`Something wrong.\nPerhaps it's ${error}`);
  }
};
