import React from 'react';

import Header from '../../shared/header/header';
import Menu from './components/menu';
import Profile from './components/profile';
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
