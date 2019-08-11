import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const userRevisitSuccess = user => ({
  type: FETCH_USER_DATA_SUCCESS,
  user,
});

export const userRevisit = () => async (dispatch) => {
  try {
    const { token } = localStorage;

    if (token) {
      const response = await fetch('api/users/getUser', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
          Revisit: `${token}`,
        },
      });
      const data = await response.json();

      if (data.message) {
        return localStorage.removeItem('token');
      }
      return dispatch(userRevisitSuccess(data));
    }
    return null;
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
