import { THROW_AUTHENTICATION_ERROR } from '../actionTypes';

const throwAuthError = errorText => ({
  type: THROW_AUTHENTICATION_ERROR,
  errorText,
});

export default throwAuthError;
