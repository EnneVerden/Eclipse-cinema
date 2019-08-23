import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const userRevisitSuccess = user => ({
  type: FETCH_USER_DATA_SUCCESS,
  user,
});

export const userRevisit = () => async (dispatch) => {
  try {
    const { token } = localStorage;

    if (token) {
      const response = await fetch('api/users/get', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
          Revisit: `${token}`,
        },
      });

      if (response.status === 400) {
        dispatch(throwWarning(response.statusText, 'error'));
        return localStorage.removeItem('token');
      }

      const data = await response.json();

      return dispatch(userRevisitSuccess(data));
    }
    return null;
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
