import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from '../auth/auth';
import Home from '../home/home';
import Settings from '../../containers/settings';
import ProtectedRoute from '../../shared/protectComponent/ProtectedRoute';
import Preloader from '../../shared/preloader/Preloader';
import UndefinedPath from '../undefinedPath/undefinedPath';

const App = ({ isLoading, email }) => (
  isLoading ? (
    <Router>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          protectField={email}
          redirectTo="/home"
          redirect
          component={Auth}
        />
        <ProtectedRoute exact path="/home" protectField={email} component={Home} />
        <ProtectedRoute
          exact
          path="/settings"
          protectField={email}
          component={Settings}
        />
        <Route component={UndefinedPath} />
      </Switch>
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
