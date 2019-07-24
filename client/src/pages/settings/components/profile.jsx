import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MyTickets from '../../../containers/profile-tickets';

class Profile extends Component {
  state = {
    fullName: this.props.fullName,
    newPassword: '',
    currentPassword: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      avatar, balance, changeUserData, removeAccount,
    } = this.props;
    const { fullName, newPassword } = this.state;

    return (
      <section className="profile tab-pane fade show active" id="profile">
        <div className="profile__block">
          <div className="profile__balance">
            <span className="profile__balance-title">Balance:</span>
            <span className="profile__number">{balance} $</span>
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
              <img src={avatar} alt="Avatar" className="profile__img" />
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
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  className="form-control profile__inp"
                  name="newPassword"
                  placeholder="New password"
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  className="form-control profile__inp"
                  name="oldPassword"
                  placeholder="Current password"
                  onChange={this.handleChange}
                />
                <div className="profile__btns">
                  <button
                    type="button"
                    className="btn profile__btn profile__btn_save"
                    onClick={() => changeUserData(fullName, newPassword)}
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
          <MyTickets />
        </div>
      </section>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  changeUserData: PropTypes.func.isRequired,
  removeAccount: PropTypes.func.isRequired,
};

export default Profile;
