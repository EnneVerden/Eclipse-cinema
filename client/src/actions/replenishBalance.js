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
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
