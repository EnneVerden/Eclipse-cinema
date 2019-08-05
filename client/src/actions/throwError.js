import { THROW_ERROR, CAUSE_ERROR_RESET } from '../actionTypes';

export const throwError = error => ({
  type: THROW_ERROR,
  error,
});

export const causeErrorReset = () => ({
  type: CAUSE_ERROR_RESET,
});
