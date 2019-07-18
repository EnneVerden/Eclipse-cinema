import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auth from '../auth/Auth';
import Home from '../home/Home';
import Settings from '../settings/Settings';

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
