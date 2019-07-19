import React from 'react';

import Header from '../../shared/header/Header';
import Menu from './components/menu';
import Profile from '../../containers/profile';
import Films from './components/films';
import Users from './components/users';

const Settings = () => (
  <div className="settings tab-content">
    <Header />
    <Menu />
    <Profile />
    <Films />
    <Users />
  </div>
);

export default Settings;
