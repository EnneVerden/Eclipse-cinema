import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auth from '../auth/auth';
import Home from '../home/home';
import Settings from '../settings/settings';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <Auth />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/settings" render={() => <Settings />} />
    </div>
  </Router>
);

export default App;
