import { DELETE_USERS_SUCCESS } from '../actionTypes';

export const deleteUsersSuccess = users => ({
  type: DELETE_USERS_SUCCESS,
  users,
});

export const deleteUsers = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const users = await response.json();

    dispatch(deleteUsersSuccess(users._id));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
