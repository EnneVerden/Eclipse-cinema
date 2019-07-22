import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from '../pages/settings/components/profile';

import { changeUserData } from '../actions/userDataChange';
import { sendRemoveRequest } from '../actions/removeAccount';

class ProfileContainer extends Component {
  componentDidMount() {
    const { removeRequest } = this.props;
    const removeBtn = document.querySelector('.profile__btn_remove');

    if (removeRequest) {
      removeBtn.classList.add('activated-remove');
      removeBtn.textContent = 'Cancel removing';
    }
  }

  componentWillUpdate(prevProps) {
    const { removeRequest } = this.props;
    const removeBtn = document.querySelector('.profile__btn_remove');

    if (prevProps.removeRequest !== removeRequest) {
      if (!removeRequest) {
        removeBtn.classList.add('activated-remove');
        removeBtn.textContent = 'Cancel removing';
      } else {
        removeBtn.classList.remove('activated-remove');
        removeBtn.textContent = 'Remove account';
      }
    }
  }

  changeUserData = (newName, newPassword) => {
    const { _id, changeData } = this.props;
    let newData = {};

    if (newName === '' || newPassword === '') return;
    if (newName !== '') newData = { fullName: newName };
    if (newPassword !== '') newData = { password: newPassword };
    if (newName !== '' && newPassword !== '') {
      newData = { fullName: newName, password: newPassword };
    }

    changeData(`/api/user/${_id}`, newData);
  };

  removeAccount = () => {
    const { _id, removeRequest, sendRequest } = this.props;
    const request = !removeRequest;

    sendRequest(`api/user/${_id}`, { removeRequest: request });
  };

  render() {
    const { avatar, fullName, balance } = this.props;

    return (
      <Profile
        changeUserData={this.changeUserData}
        avatar={avatar}
        fullName={fullName}
        balance={balance}
        removeAccount={this.removeAccount}
      />
    );
  }
}

ProfileContainer.propTypes = {
  _id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  removeRequest: PropTypes.bool.isRequired,
  changeData: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  _id: state.userData._id,
  avatar: state.userData.avatar,
  fullName: state.userData.fullName,
  balance: state.userData.balance,
  removeRequest: state.userData.removeRequest,
});

const mapDispatchToProps = dispatch => ({
  changeData: (url, body) => dispatch(changeUserData(url, body)),
  sendRequest: (url, body) => dispatch(sendRemoveRequest(url, body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
