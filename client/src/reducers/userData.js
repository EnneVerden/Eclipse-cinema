import {
  FETCH_USER_DATA_SUCCESS,
  SEND_USER_DATA_SUCCESS,
  CHANGE_USER_DATA_SUCCESS,
  SEND_REMOVE_REQUEST_SUCCESS,
  DELETE_TICKET_SUCCESS,
  USER_IS_LOGGED_OUT,
} from '../actionTypes';

const initialState = {};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return action.user;
    case SEND_USER_DATA_SUCCESS:
      return action.user;
    case CHANGE_USER_DATA_SUCCESS:
      return {
        ...state,
        fullName: action.newUserData.fullName,
        password: action.newUserData.password,
      };
    case SEND_REMOVE_REQUEST_SUCCESS:
      return { ...state, removeRequest: action.newUserData.removeRequest };
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
