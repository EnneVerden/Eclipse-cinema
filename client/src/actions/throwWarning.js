import { THROW_WARNING, CAUSE_WARNING_RESET } from '../actionTypes';

export const throwWarning = (warningText, warningType) => ({
  type: THROW_WARNING,
  warningText,
  warningType,
});

export const causeWarningReset = () => ({
  type: CAUSE_WARNING_RESET,
});
