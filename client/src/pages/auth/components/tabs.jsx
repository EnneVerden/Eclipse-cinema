import React from 'react';

const Tabs = () => (
  <ul className="auth__tabs nav">
    <li className="auth__tabs__tab">
      <a href="#sign-in" data-toggle="tab" className="auth__tabs__tab-link">
        <span className="auth__tabs__tab-text">Sign in</span>
      </a>
    </li>
    <li className="auth__tabs__tab">
      <a href="#sign-up" data-toggle="tab" className="auth__tabs__tab-link">
        <span className="auth__tabs__text">Sign up</span>
      </a>
    </li>
  </ul>
);

export default Tabs;
