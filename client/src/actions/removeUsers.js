import { REMOVE_USERS_SUCCESS } from '../actionTypes';

export const removeUsersSuccess = users => ({
  type: REMOVE_USERS_SUCCESS,
  users,
});

export const removeUsers = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const users = await response.json();

    dispatch(removeUsersSuccess(users._id));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
