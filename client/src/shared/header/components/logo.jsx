import React from 'react';

const Logo = () => (
  <div className="header__logo">
    <a href="/home" className="header__logo-link">
      <img src="./logo.png" alt="Logo" className="header__logo-img" />
      <span>Eclipse</span>
    </a>
  </div>
);

export default Logo;
