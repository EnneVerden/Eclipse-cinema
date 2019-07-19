import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import Auth from '../auth/Auth';
import Home from '../home/Home';
import Settings from '../settings/Settings';
import ProtectedRoute from './ProtectedRoute';

const App = ({ email }) => (
  <Router>
    <div>
      <ProtectedRoute
        exact
        path="/"
        protectField={email}
        redirectTo="/home"
        redirect
        component={Auth}
      />
      <ProtectedRoute
        exact
        path="/home"
        protectField={email}
        component={Home}
      />
      <ProtectedRoute
        exact
        path="/settings"
        protectField={email}
        component={Settings}
      />
    </div>
  </Router>
);

App.propTypes = {
  email: PropTypes.string,
};

App.defaultProps = {
  email: undefined,
};

export default App;
