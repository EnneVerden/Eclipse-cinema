import { FETCH_USERS_DATA_SUCCESS } from '../actionTypes';

export const fetchUsersDataSuccess = users => ({
  type: FETCH_USERS_DATA_SUCCESS,
  users,
});

export const fetchUsersData = url => async (dispatch) => {
  try {
    const response = await fetch(url);
    const users = await response.json();

    dispatch(fetchUsersDataSuccess(users));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
