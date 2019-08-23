import { BUY_TICKET_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const buyTicketSuccess = ticket => ({
  type: BUY_TICKET_SUCCESS,
  ticket,
});

export const buyTicket = (userID, body) => async (dispatch) => {
  try {
    const response = await fetch(`api/users/${userID}/change`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const ticket = await response.json();
    return dispatch(buyTicketSuccess(ticket.buyTicket));
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
