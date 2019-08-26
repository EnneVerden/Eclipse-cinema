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
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
