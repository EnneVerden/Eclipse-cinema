import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storage } from '../firebase-config';

import Profile from '../pages/settings/components/profile';

import { replenishBalance } from '../actions/replenishBalance';
import { changeUserData } from '../actions/userChange';
import { sendRemoveRequest } from '../actions/deleteAccount';
import { throwWarning } from '../actions/throwWarning';

class ProfileContainer extends PureComponent {
  state = {
    fullName: this.props.fullName,
    newPassword: '',
    currentPassword: '',
  };

  componentDidMount = () => {
    const { removeRequest } = this.props;
    const removeBtn = document.querySelector('.profile__btn_remove');

    if (removeRequest) {
      removeBtn.classList.add('activated-remove');
      removeBtn.textContent = 'Cancel removing';
    }
  };

  componentDidUpdate = (prevProps) => {
    const { removeRequest } = this.props;
    const removeBtn = document.querySelector('.profile__btn_remove');

    if (prevProps.removeRequest !== removeRequest) {
      if (removeRequest) {
        removeBtn.classList.add('activated-remove');
        removeBtn.textContent = 'Cancel removing';
      } else {
        removeBtn.classList.remove('activated-remove');
        removeBtn.textContent = 'Remove account';
      }
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  replenishBalance = () => {
    const { _id, replenishWallet } = this.props;

    replenishWallet(_id, { balance: 5 });
  }

  uploadImage = async (event) => {
    const { throwNewWarning } = this.props;
    const labelText = document.querySelector('.profile__label-text');

    if (event.target.files[0].size > (1 * 1024 * 1024)) {
      return throwNewWarning('Image cannot exceed 1MB!', 'error');
    }

    if (event.target.files[0].type !== 'image/png'
        && event.target.files[0].type !== 'image/jpeg') {
      return throwNewWarning('Image can only be in PNG/JPEG/JPG format!', 'error');
    }

    if (event.target.value) {
      labelText.innerHTML = event.target.value.split('\\').pop();
    }

    try {
      const { _id, changeData } = this.props;

      const storageRef = storage.ref(`images/${_id}`);
      await storageRef.put(event.target.files[0]);

      const avatarURL = await storageRef.getDownloadURL();
      return changeData(_id, { avatar: avatarURL });
    } catch (error) {
      return throwNewWarning('Image upload error!', 'error');
    }
  };

  changeUserData = () => {
    const { fullName, newPassword, currentPassword } = this.state;
    const { _id, changeData } = this.props;
    let newData = {};

    if (fullName === '' && newPassword === '') return;
    if (fullName !== '') newData = { fullName, oldPassword: currentPassword };
    if (newPassword !== '') {
      newData = { password: newPassword, oldPassword: currentPassword };
    }
    if (fullName !== '' && newPassword !== '') {
      newData = {
        fullName,
        password: newPassword,
        oldPassword: currentPassword,
      };
    }

    changeData(_id, newData);
  };

  removeAccount = () => {
    const { _id, removeRequest, sendRequest } = this.props;
    const request = !removeRequest;

    sendRequest(_id, { removeRequest: request });
  };

  render() {
    const { fullName } = this.state;
    const { avatar, balance } = this.props;

    return (
      <Profile
        handleChange={this.handleChange}
        changeUserData={this.changeUserData}
        avatar={avatar}
        fullName={fullName}
        balance={balance}
        removeAccount={this.removeAccount}
        uploadImage={this.uploadImage}
        replenishBalance={this.replenishBalance}
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
  replenishWallet: PropTypes.func.isRequired,
  changeData: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired,
  throwNewWarning: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  _id: state.userData._id,
  avatar: state.userData.avatar,
  fullName: state.userData.fullName,
  balance: state.userData.balance,
  removeRequest: state.userData.removeRequest,
});

const mapDispatchToProps = dispatch => ({
  changeData: (userID, body) => dispatch(changeUserData(userID, body)),
  sendRequest: (userID, body) => dispatch(sendRemoveRequest(userID, body)),
  replenishWallet: (userID, body) => dispatch(replenishBalance(userID, body)),
  throwNewWarning: (warningText, warningType) => dispatch(throwWarning(warningText, warningType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
