import { FETCH_USER_DATA_SUCCESS } from '../actionTypes';

export const fetchUserDataSuccess = user => ({
  type: FETCH_USER_DATA_SUCCESS,
  user,
});

export const fetchUserData = url => (dispatch) => {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res;
    })
    .then(res => res.json())
    .then((user) => {
      if (user !== false) {
        dispatch(fetchUserDataSuccess(user));
      }
    });
};
