import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from '../pages/settings/components/profile';
import { changeUserName } from '../actions/userNameChange';

class ProfileContainer extends Component {
  changeUserName = (newName) => {
    const { _id, changeName } = this.props;

    changeName(`/api/user/${_id}`, { fullName: newName });
  };

  render() {
    const { avatar, fullName, balance } = this.props;

    return (
      <Profile
        changeUserName={this.changeUserName}
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
  changeName: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  _id: state.userData._id,
  avatar: state.userData.avatar,
  fullName: state.userData.fullName,
  balance: state.userData.balance,
});

const mapDispatchToProps = dispatch => ({
  changeName: (url, body) => dispatch(changeUserName(url, body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
