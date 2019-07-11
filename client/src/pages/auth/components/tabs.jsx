import React from 'react';

const Tabs = () => (
  <ul className="auth__tabs nav" role="tablist">
    <li className="auth__tabs__tab">
      <a
        href="#sign-in"
        id="signin-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="sign-in"
        aria-selected="true"
        className="auth__tabs__tab-link"
      >
        <span className="auth__tabs__tab-text">Sign in</span>
      </a>
    </li>
    <li className="auth__tabs__tab">
      <a
        href="#sign-up"
        id="signup-tab"
        data-toggle="tab"
        role="tab"
        aria-controls="sign-up"
        aria-selected="true"
        className="auth__tabs__tab-link"
      >
        <span className="auth__tabs__text">Sign up</span>
      </a>
    </li>
  </ul>
);

export default Tabs;
