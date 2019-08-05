import { BUY_TICKET_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

export const buyTicketSuccess = ticket => ({
  type: BUY_TICKET_SUCCESS,
  ticket,
});

export const buyTicket = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const ticket = await response.json();
    return dispatch(buyTicketSuccess(ticket.buyTicket));
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
