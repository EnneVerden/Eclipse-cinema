import React from 'react';

const Links = () => (
  <div>
    <a href="/home" className="dropdown-item dropdown__link">
      <i className="fas fa-wallet dropdown__icon" />
      <span>Balance: 100 $</span>
    </a>
    <a href="/home" className="dropdown-item dropdown__link">
      <i className="fas fa-cog dropdown__icon dropdown__icon_animate" />
      <span>Settings</span>
    </a>
    <a href="/home" className="dropdown-item dropdown__link">
      <i className="fas fa-sign-out-alt dropdown__icon dropdown__icon_animate" />
      <span>Logout</span>
    </a>
  </div>
);

export default Links;
