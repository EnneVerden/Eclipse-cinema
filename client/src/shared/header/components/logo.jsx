import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="header__logo">
    <Link to="/home" className="header__logo-link">
      <span>Eclipse</span>
    </Link>
  </div>
);

export default Logo;
