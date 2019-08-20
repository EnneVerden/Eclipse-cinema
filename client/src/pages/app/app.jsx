import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import Auth from '../auth/auth';
import Home from '../home/home';
import Settings from '../../containers/settings';
import ProtectedRoute from '../../shared/protectComponent/ProtectedRoute';
import Preloader from '../../shared/preloader/Preloader';

const App = ({ isLoading, email }) => (
  isLoading ? (
    <Router>
      <ProtectedRoute
        exact
        path="/"
        protectField={email}
        redirectTo="/home"
        redirect
        component={Auth}
      />
      <ProtectedRoute path="/home" protectField={email} component={Home} />
      <ProtectedRoute
        exact
        path="/settings"
        protectField={email}
        component={Settings}
      />
    </Router>
  ) : (
    <Preloader />
  )
);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  email: PropTypes.string,
};

App.defaultProps = {
  email: undefined,
};

export default App;
