import {
  THROW_WARNING,
  CAUSE_WARNING_RESET,
  USER_IS_LOGGED_OUT,
} from '../actionTypes';

const initialState = {
  warningText: '',
  warningType: '',
};

const warning = (state = initialState, action) => {
  switch (action.type) {
    case THROW_WARNING:
      return {
        warningText: action.warningText,
        warningType: action.warningType,
      };
    case CAUSE_WARNING_RESET:
      return initialState;
    case USER_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default warning;
