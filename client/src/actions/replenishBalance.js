import { REPLENISH_BALANCE_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const replenishBalanceSuccess = balance => ({
  type: REPLENISH_BALANCE_SUCCESS,
  balance,
});

export const replenishBalance = (userID, body) => async (dispatch) => {
  try {
    const response = await fetch(`api/users/${userID}/change`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return dispatch(replenishBalanceSuccess(data));
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
