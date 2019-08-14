import { FETCH_ORDERS_SUCCESS } from '../actionTypes';
import { throwError } from './throwError';

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
