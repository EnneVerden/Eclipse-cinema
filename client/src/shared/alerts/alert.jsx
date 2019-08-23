import React from 'react';
import PropTypes from 'prop-types';

const Warning = ({ warningText, warningType }) => (
  <div className="warning-alert">
    <div
      className={`warning-alert__info alert ${
        warningType === 'success' ? 'alert-success' : 'alert-danger'
      }`}
      role="alert"
    >
      <div
        className={`warning-alert__icon ${
          warningType === 'success'
            ? 'warning-alert__icon_success'
            : 'warning-alert__icon_error'
        }`}
      >
        {warningType === 'success' ? (
          <i className="fas fa-check-circle" />
        ) : (
          <i className="fas fa-exclamation-triangle" />
        )}
      </div>
      <span className="warning-alert__text">{warningText}</span>
    </div>
  </div>
);

Warning.propTypes = {
  warningText: PropTypes.string,
  warningType: PropTypes.string,
};

Warning.defaultProps = {
  warningText: '',
  warningType: '',
};

export default Warning;
