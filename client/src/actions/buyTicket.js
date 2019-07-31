import { BUY_TICKET_SUCCESS } from '../actionTypes';

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

    dispatch(buyTicketSuccess(ticket.buyTicket));
  } catch (error) {
    console.log(`Something wrong.\nPerhaps it's ${error}`);
  }
};
