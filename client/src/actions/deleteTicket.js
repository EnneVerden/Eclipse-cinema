import { DELETE_TICKET_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

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
