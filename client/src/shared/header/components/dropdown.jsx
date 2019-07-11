import React from 'react';

import Links from './links';

const Dropdown = () => (
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
        <img
          src="https://www.manohman.com.au/favicon.png"
          alt="Avatar"
          className="dropdown__img"
        />
        <span className="dropdown__name">Adamovich Pavel</span>
        <div
          className="dropdown-menu dropdown__menu"
          aria-labelledby="dropdown-menu-button"
        >
          <Links />
        </div>
      </button>
    </div>
  </div>
);

export default Dropdown;
