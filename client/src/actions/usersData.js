import { FETCH_USERS_DATA_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

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
        return dispatch(throwError('No internet connection!'));
      case 'Unexpected token P in JSON at position 0':
        return dispatch(throwError('Server is not avaible!'));
      default:
        return dispatch(throwError('Unknown error!'));
    }
  }
};
