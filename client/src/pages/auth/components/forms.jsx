import React from 'react';

import SignIn from '../../../containers/signIn';
import SignUp from './signUp';

const Forms = () => (
  <div className="auth__forms tab-content">
    <SignIn />
    <SignUp />
  </div>
);

export default Forms;
