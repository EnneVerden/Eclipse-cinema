import { FETCH_USERS_DATA_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const fetchUsersDataSuccess = users => ({
  type: FETCH_USERS_DATA_SUCCESS,
  users,
});

export const fetchUsersData = () => async (dispatch) => {
  try {
    const response = await fetch('api/users/get');
    const users = await response.json();

    return dispatch(fetchUsersDataSuccess(users));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
