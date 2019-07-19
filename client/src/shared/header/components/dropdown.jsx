import React from 'react';
import PropTypes from 'prop-types';

import Links from './links';

const Dropdown = ({ avatar, fullName, balance }) => (
  <div className="dropdown__block">
    <div className="dropdown">
      <button
        className="btn dropdown-toggle dropdown_btn"
        type="button"
        id="dropdown-menu-button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src={avatar} alt="Avatar" className="dropdown__img" />
        <span className="dropdown__name">{fullName}</span>
      </button>
      <div
        className="dropdown-menu dropdown__menu"
        aria-labelledby="dropdown-menu-button"
      >
        <Links balance={balance} />
      </div>
    </div>
  </div>
);

Dropdown.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Dropdown;
