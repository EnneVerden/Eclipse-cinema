import { SEND_USER_DATA_SUCCESS } from '../actionTypes';

export const sendUserDataSuccess = user => ({
  type: SEND_USER_DATA_SUCCESS,
  user,
});

export const sendUserData = (url, body) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res;
    })
    .then(res => res.json())
    .then((user) => {
      if (user !== false) {
        dispatch(sendUserDataSuccess(user));
      }
    });
};
