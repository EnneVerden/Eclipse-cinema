import React from 'react';
import PropTypes from 'prop-types';

import ProfileTickets from './profile-tickets';

const Profile = ({
  handleChange,
  avatar,
  fullName,
  balance,
  changeUserData,
  removeAccount,
  uploadImage,
  replenishBalance,
}) => (
  <section className="profile tab-pane fade show active" id="profile">
    <div className="profile__block">
      <div className="profile__balance">
        <span className="profile__balance-title">Balance:</span>
        <span className="profile__number">{balance} $</span>
        <span className="profile__arrow">
          <i className="fas fa-chevron-right profile__arrow_img" />
        </span>
        <button
          type="button"
          className="btn profile__btn_replenish"
          onClick={replenishBalance}
        >
          <span className="profile__btn_replenish_text">Replenish</span>
          <i className="fas fa-coins profile__btn_replenish_text" />
        </button>
      </div>
      <div className="profile__passport">
        <div className="profile__avatar">
          <img src={avatar} alt="Avatar" className="profile__img" />
          <label htmlFor="file" className="profile__label">
            <input
              type="file"
              id="file"
              className="profile__uploader"
              accept=".jpg, .jpeg, .png"
              onChange={uploadImage}
            />
            <i className="fas fa-arrow-circle-up profile__uploader__icon" />
            <span className="profile__label-text">Choose a file</span>
          </label>
        </div>
        <div className="profile__info">
          <form
            action="#"
            className="profile__form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input
              type="text"
              className="form-control profile__inp"
              name="fullName"
              placeholder="Full name"
              value={fullName}
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control profile__inp"
              name="newPassword"
              placeholder="New password"
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control profile__inp"
              name="currentPassword"
              placeholder="Current password"
              onChange={handleChange}
            />
            <div className="profile__btns">
              <button
                type="button"
                className="btn profile__btn profile__btn_save"
                onClick={changeUserData}
              >
                Save
              </button>
              <button
                type="button"
                className="btn profile__btn profile__btn_remove"
                onClick={removeAccount}
              >
                Remove account
              </button>
            </div>
          </form>
        </div>
      </div>
      <ProfileTickets />
    </div>
  </section>
);

Profile.propTypes = {
  handleChange: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  changeUserData: PropTypes.func.isRequired,
  removeAccount: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  replenishBalance: PropTypes.func.isRequired,
};

export default Profile;
