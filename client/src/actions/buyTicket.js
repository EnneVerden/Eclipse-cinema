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
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
