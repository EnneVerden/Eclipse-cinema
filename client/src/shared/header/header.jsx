import React from 'react';

import Logo from './components/logo';
import Dropdown from './components/dropdown';
import SideMenu from './components/sideMenu';

const Header = () => (
  <header className="header">
    <div className="header__block">
      <Logo />
      <Dropdown />
      <SideMenu />
    </div>
  </header>
);

export default Header;
