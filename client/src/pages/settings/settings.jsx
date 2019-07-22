import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../shared/header/Header';
import Menu from '../../containers/menu';
import Profile from '../../containers/profile';
import Films from '../../containers/filmsTable';
import Users from '../../containers/usersTable';

import ProtectedComponent from '../../shared/protectComponent/ProtectedComp';

const Settings = ({ status }) => (
  <div className="settings tab-content">
    <Header />
    <Menu />
    <Profile />
    <ProtectedComponent protectField={status} component={Films} />
    <ProtectedComponent protectField={status} component={Users} />
  </div>
);

Settings.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Settings;
