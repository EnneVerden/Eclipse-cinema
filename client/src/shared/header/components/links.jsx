import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Links = ({ balance }) => (
  <nav>
    <Link to="/settings" className="dropdown-item dropdown__link">
      <i className="fas fa-wallet dropdown__icon" />
      <span>Balance: {balance} $</span>
    </Link>
    <Link to="/settings" className="dropdown-item dropdown__link">
      <i className="fas fa-cog dropdown__icon dropdown__icon_animate" />
      <span>Settings</span>
    </Link>
    <Link to="/" className="dropdown-item dropdown__link">
      <i className="fas fa-sign-out-alt dropdown__icon dropdown__icon_animate" />
      <span>Logout</span>
    </Link>
  </nav>
);

Links.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Links;
