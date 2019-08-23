import {
  FETCH_USER_DATA_SUCCESS,
  CHANGE_USER_DATA_SUCCESS,
  SEND_REMOVE_REQUEST_SUCCESS,
  REPLENISH_BALANCE_SUCCESS,
  BUY_TICKET_SUCCESS,
  DELETE_TICKET_SUCCESS,
  USER_IS_LOGGED_OUT,
} from '../actionTypes';

const initialState = {};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return action.user;
    case CHANGE_USER_DATA_SUCCESS:
      if (action.newUserData.avatar) {
        return { ...state, avatar: action.newUserData.avatar };
      }

      return {
        ...state,
        fullName: action.newUserData.fullName,
        password: action.newUserData.password,
      };
    case SEND_REMOVE_REQUEST_SUCCESS:
      return { ...state, removeRequest: action.newUserData.removeRequest };
    case REPLENISH_BALANCE_SUCCESS:
      return { ...state, balance: state.balance + action.balance.balance };
    case BUY_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, action.ticket],
        balance: state.balance - action.ticket.ticketPrice,
      };
    case DELETE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: state.tickets.filter(
          item => item._id !== action.deletedTicketID,
        ),
      };
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default userData;
