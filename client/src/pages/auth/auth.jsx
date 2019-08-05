import React from 'react';

import Tabs from './components/tabs';
import Forms from './components/forms';
import ErrorAlert from '../../containers/alert';

const Auth = () => (
  <section className="auth">
    <div className="auth__block">
      <Tabs />
      <Forms />
      <ErrorAlert />
    </div>
  </section>
);

export default Auth;
