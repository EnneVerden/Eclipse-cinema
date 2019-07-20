import { CHANGE_USER_NAME_SUCCESS } from '../actionTypes';

export const changeUserNameSuccess = newName => ({
  type: CHANGE_USER_NAME_SUCCESS,
  newName,
});

export const changeUserName = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const newName = await response.json();

    dispatch(changeUserNameSuccess(newName.fullName));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
