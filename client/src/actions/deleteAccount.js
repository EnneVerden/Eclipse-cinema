import { SEND_REMOVE_REQUEST_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const sendRemoveRequestSuccess = newUserData => ({
  type: SEND_REMOVE_REQUEST_SUCCESS,
  newUserData,
});

export const sendRemoveRequest = (userID, body) => async (dispatch) => {
  try {
    const response = await fetch(`api/users/${userID}/change`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const newUserData = await response.json();
    return dispatch(sendRemoveRequestSuccess(newUserData));
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
