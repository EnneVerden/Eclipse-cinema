import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from '../pages/settings/components/profile';
import { changeUserData } from '../actions/userDataChange';

class ProfileContainer extends Component {
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

  render() {
    const { avatar, fullName, balance } = this.props;

    return (
      <Profile
        changeUserData={this.changeUserData}
        avatar={avatar}
        fullName={fullName}
        balance={balance}
      />
    );
  }
}

ProfileContainer.propTypes = {
  _id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  changeData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  _id: state.userData._id,
  avatar: state.userData.avatar,
  fullName: state.userData.fullName,
  balance: state.userData.balance,
});

const mapDispatchToProps = dispatch => ({
  changeData: (url, body) => dispatch(changeUserData(url, body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
