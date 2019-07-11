import React from 'react';

const showMenu = (event) => {
  event.preventDefault();
  document
    .querySelector('.side-menu__block')
    .classList.toggle('side-menu_active');
  document
    .querySelector('.side-menu__btn')
    .classList.toggle('side-menu__btn_active');
};

const SideMenu = () => (
  <div className="side-menu">
    <button type="button" className="btn side-menu__btn" onClick={showMenu}>
      <span className="side-menu__btn__icon" />
    </button>
    <div className="side-menu__block">
      <div className="side-menu__profile">
        <img
          src="https://www.manohman.com.au/favicon.png"
          alt="Avatar"
          className="side-menu__img"
        />
        <span className="side-menu__name">Adamovich Pavel</span>
      </div>
      <div className="side-menu__links">
        <a href="#" className="side-menu__link">
          <i className="fas fa-wallet side-menu__icon" />
          <span>Balance: 100 $</span>
        </a>
        <a href="#" className="side-menu__link">
          <i className="fas fa-cog side-menu__icon" />
          <span>Settings</span>
        </a>
        <a href="#" className="side-menu__link">
          <i className="fas fa-sign-out-alt side-menu__icon" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  </div>
);

export default SideMenu;
