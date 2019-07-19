import React from 'react';

import Logo from './components/logo';
import Dropdown from '../../containers/dropdown';
import SideMenu from '../../containers/sideMenu';

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
