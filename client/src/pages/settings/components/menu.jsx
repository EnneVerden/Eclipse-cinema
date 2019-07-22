import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './menu-item';
import ProtectedComponent from '../../../shared/protectComponent/ProtectedComp';

const Menu = ({ status }) => (
  <section className="menu">
    <div className="menu__block">
      <nav className="menu__list nav">
        <MenuItem anchor="#profile" itemName="Profile" />
        <ProtectedComponent
          protectField={status}
          component={MenuItem}
          anchor="#films"
          itemName="Films"
        />
        <ProtectedComponent
          protectField={status}
          component={MenuItem}
          anchor="#users"
          itemName="Users"
        />
      </nav>
    </div>
  </section>
);

Menu.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Menu;
