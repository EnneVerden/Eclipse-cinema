import { USER_IS_LOGGED_OUT } from '../actionTypes';

const userLogout = () => {
  localStorage.removeItem('token');
  return {
    type: USER_IS_LOGGED_OUT,
  };
};

export default userLogout;
