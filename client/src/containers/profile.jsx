import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from '../pages/settings/components/profile';

import { changeUserData } from '../actions/userChange';
import { sendRemoveRequest } from '../actions/deleteAccount';

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
  }

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
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  changeUserData = () => {
    const { fullName, newPassword } = this.state;
    const { _id, changeData } = this.props;
    let newData = {};

    if (fullName === '' && newPassword === '') return;
    if (fullName !== '') newData = { fullName };
    if (newPassword !== '') newData = { password: newPassword };
    if (fullName !== '' && newPassword !== '') {
      newData = { fullName, password: newPassword };
    }

    changeData(`api/users/${_id}/change`, newData);
  };

  removeAccount = () => {
    const { _id, removeRequest, sendRequest } = this.props;
    const request = !removeRequest;

    sendRequest(`api/users/${_id}/change`, { removeRequest: request });
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
