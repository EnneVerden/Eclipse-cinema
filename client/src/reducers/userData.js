import FETCH_USER_DATA_SUCCESS from '../actionTypes';

const userData = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return action.user;
    default:
      return state;
  }
};

export default userData;
