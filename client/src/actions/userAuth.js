import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';
import throwAuthError from './authError';

export const fetchUserDataSuccess = user => ({
  type: FETCH_USER_DATA_SUCCESS,
  user,
});

export const fetchUserData = url => async (dispatch) => {
  try {
    const response = await fetch(url);
    const user = await response.json();

    if (user !== false) {
      dispatch(fetchUserDataSuccess(user));
    } else {
      dispatch(throwAuthError('Invalid login or password'));
    }
  } catch (error) {
    console.log(`Something wrong.\nPerhaps it's ${error}`);
  }
};
