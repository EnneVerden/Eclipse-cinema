import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MenuItem from './menu-item';
import ProtectedComponent from '../../../shared/protectComponent/ProtectedComp';

const Menu = ({ status }) => (
  <section className="menu">
    <div className="menu__block">
      <nav className="menu__list nav">
        <Link to="/home" className="menu__item menu__home_mobile">
          <i className="fas fa-home" />
        </Link>
        <ProtectedComponent
          protectField={status}
          component={MenuItem}
          anchor="#profile"
          itemName="Profile"
        />
        <ProtectedComponent
          protectField={status}
          component={MenuItem}
          anchor="#films"
          itemName="Films"
        />
        <Link to="/home" className="menu__item menu__home">
          <i className="fas fa-home" />
        </Link>
        <ProtectedComponent
          protectField={status}
          component={MenuItem}
          anchor="#users"
          itemName="Users"
        />
        <ProtectedComponent
          protectField={status}
          component={MenuItem}
          anchor="#orders"
          itemName="Orders"
        />
      </nav>
    </div>
  </section>
);

Menu.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Menu;
