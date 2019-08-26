import { FETCH_ORDERS_SUCCESS } from '../actionTypes';
import { throwWarning } from './throwWarning';

export const fetchOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  orders,
});

export const fetchOrders = () => async (dispatch) => {
  try {
    const response = await fetch('api/users/get', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Orders: true,
      },
    });

    const data = await response.json();

    return dispatch(fetchOrdersSuccess(data));
  } catch (error) {
    return dispatch(throwWarning('Oops... Something is wrong! Please try again.', 'error'));
  }
};
