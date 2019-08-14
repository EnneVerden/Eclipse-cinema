import { FETCH_ORDERS_SUCCESS, USER_IS_LOGGED_OUT } from '../actionTypes';

const initialSate = [];

const orders = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return action.orders;
    case USER_IS_LOGGED_OUT:
      return initialSate;
    default:
      return state;
  }
};

export default orders;
