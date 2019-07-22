import { SEND_REMOVE_REQUEST_SUCCESS } from '../actionTypes';

export const sendRemoveRequestSuccess = newUserData => ({
  type: SEND_REMOVE_REQUEST_SUCCESS,
  newUserData,
});

export const sendRemoveRequest = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const newUserData = await response.json();

    dispatch(sendRemoveRequestSuccess(newUserData));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
