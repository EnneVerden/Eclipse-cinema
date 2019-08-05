import { SEND_REMOVE_REQUEST_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const sendRemoveRequestSuccess = newUserData => ({
  type: SEND_REMOVE_REQUEST_SUCCESS,
  newUserData,
});

export const sendRemoveRequest = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const newUserData = await response.json();
    return dispatch(sendRemoveRequestSuccess(newUserData));
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
