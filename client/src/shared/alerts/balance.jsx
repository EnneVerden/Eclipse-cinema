import React from 'react';

const BalanceErrorAlert = () => (
  <div className="balance-error-alert">
    <div className="balance-error-alert__info alert alert-danger" role="alert">
      <div className="balance-error-alert__icon">
        <i className="fas fa-exclamation-triangle" />
      </div>
      <span>Insufficient funds on balance.</span>
    </div>
  </div>
);

export default BalanceErrorAlert;
