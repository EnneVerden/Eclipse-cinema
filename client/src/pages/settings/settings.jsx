import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../shared/header/header';
import Menu from '../../containers/menu';
import Profile from '../../containers/profile';
import Films from './components/films';
import UsersTable from '../../containers/usersTable';
import Orders from '../../containers/orders';
import Warning from '../../containers/alert';

import ProtectedComponent from '../../shared/protectComponent/ProtectedComp';

const Settings = ({ status }) => (
  <div className="settings tab-content">
    <Header />
    <Menu />
    <Profile />
    <ProtectedComponent protectField={status} component={Films} />
    <ProtectedComponent protectField={status} component={UsersTable} />
    <ProtectedComponent protectField={status} component={Orders} />
    <Warning />
  </div>
);

Settings.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Settings;
