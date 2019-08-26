import { DELETE_TICKET_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const deleteTicketSuccess = deletedTicketID => ({
  type: DELETE_TICKET_SUCCESS,
  deletedTicketID,
});

export const deleteTicket = (userID, body) => async (dispatch) => {
  try {
    const response = await fetch(`api/users/${userID}/change`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const deletedTicketID = await response.json();
    return dispatch(deleteTicketSuccess(deletedTicketID.deletedTicket));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
