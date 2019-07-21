import { CHANGE_USER_DATA_SUCCESS } from '../actionTypes';

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

    dispatch(changeUserDataSuccess(newUserData));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
