import React from 'react';

import Tabs from './components/tabs';
import Forms from './components/forms';

const Auth = () => (
  <section className="auth">
    <div className="auth__block">
      <Tabs />
      <Forms />
    </div>
  </section>
);

export default Auth;
