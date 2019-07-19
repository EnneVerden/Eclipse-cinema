import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const showMenu = (event) => {
  event.preventDefault();
  document
    .querySelector('.side-menu__block')
    .classList.toggle('side-menu_active');
  document
    .querySelector('.side-menu__btn')
    .classList.toggle('side-menu__btn_active');
};

const SideMenu = ({ avatar, fullName, balance }) => (
  <div className="side-menu">
    <button type="button" className="btn side-menu__btn" onClick={showMenu}>
      <span className="side-menu__btn__icon" />
    </button>
    <div className="side-menu__block">
      <div className="side-menu__profile">
        <img src={avatar} alt="Avatar" className="side-menu__img" />
        <span className="side-menu__name">{fullName}</span>
      </div>
      <div className="side-menu__links">
        <Link to="/settings" className="side-menu__link">
          <i className="fas fa-wallet side-menu__icon" />
          <span>Balance: {balance} $</span>
        </Link>
        <Link to="/settings" className="side-menu__link">
          <i className="fas fa-cog side-menu__icon" />
          <span>Settings</span>
        </Link>
        <Link to="/" className="side-menu__link">
          <i className="fas fa-sign-out-alt side-menu__icon" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  </div>
);

SideMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

export default SideMenu;
