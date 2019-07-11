import React from 'react';

const Profile = () => (
  <section
    className="profile tab-pane fade show active"
    id="profile"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <div className="profile__block">
      <div className="profile__balance">
        <span className="profile__balance-title">Balance:</span>
        <span className="profile__number">100 $</span>
        <span className="profile__arrow">
          <i className="fas fa-chevron-right profile__arrow_img" />
        </span>
        <button type="button" className="btn profile__btn_replenish">
          <span className="profile__btn_replenish_text">Replenish</span>
          <i className="fas fa-coins profile__btn_replenish_text" />
        </button>
      </div>
      <div className="profile__passport">
        <div className="profile__avatar">
          <img
            src="https://www.manohman.com.au/favicon.png"
            alt="Avatar"
            className="profile__img"
          />
        </div>
        <div className="profile__info">
          <form method="POST" action="#" className="profile__form">
            <input
              type="text"
              className="form-control profile__inp"
              placeholder="Full name"
              value="Adamovich Pavel"
            />
            <input
              type="password"
              className="form-control profile__inp"
              placeholder="New password"
            />
            <input
              type="password"
              className="form-control profile__inp"
              placeholder="Old password"
            />
            <div className="profile__btns">
              <button
                type="button"
                className="btn profile__btn profile__btn_save"
              >
                Save
              </button>
              <button
                type="button"
                className="btn profile__btn profile__btn_remove"
              >
                Remove
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Profile;
