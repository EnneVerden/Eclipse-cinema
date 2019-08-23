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
    switch (error.message) {
      case 'Failed to fetch':
        return dispatch(throwWarning('No internet connection!', 'error'));
      case 'Unexpected token P in JSON at position 0':
        return dispatch(throwWarning('Server is not avaible!', 'error'));
      default:
        return dispatch(throwWarning('Unknown error!', 'error'));
    }
  }
};
