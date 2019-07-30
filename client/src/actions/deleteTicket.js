import { DELETE_TICKET_SUCCESS } from '../actionTypes';

export const deleteTicketSuccess = deletedTicketID => ({
  type: DELETE_TICKET_SUCCESS,
  deletedTicketID,
});

export const deleteTicket = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const deletedTicketID = await response.json();

    dispatch(deleteTicketSuccess(deletedTicketID.deletedTicket));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
