import React from 'react';

const Menu = () => (
  <section className="menu">
    <div className="menu__block">
      <ul className="menu__list nav" role="tablist">
        <li className="menu__item">
          <a
            href="#profile"
            className="menu__link"
            id="profile-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="profile"
            aria-selected="true"
          >
            Profile
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#films"
            className="menu__link"
            id="films-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="films"
            aria-selected="true"
          >
            Films
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#users"
            className="menu__link"
            id="users-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="users"
            aria-selected="true"
          >
            Users
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Menu;
