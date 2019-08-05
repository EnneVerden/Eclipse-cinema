import React from 'react';
import PropTypes from 'prop-types';

const ErrorAlert = ({ errorText }) => (
  <div className="error-alert">
    <div className="error-alert__info alert alert-danger" role="alert">
      <div className="error-alert__icon">
        <i className="fas fa-exclamation-triangle" />
      </div>
      <span className="error-alert__text">{errorText}</span>
    </div>
  </div>
);

ErrorAlert.propTypes = {
  errorText: PropTypes.string,
};

ErrorAlert.defaultProps = {
  errorText: '',
};

export default ErrorAlert;
