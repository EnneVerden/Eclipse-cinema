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
    switch (error.message) {
      case 'Failed to fetch':
        return dispatch(throwWarning('No internet connection!', 'error'));
      case 'Unexpected token P in JSON at position 0':
        return dispatch(throwWarning('Server is not avaible!', 'error'));
      default:
        return dispatch(throwWarning('Unknown error!', 'error'));
    }
  }
};
