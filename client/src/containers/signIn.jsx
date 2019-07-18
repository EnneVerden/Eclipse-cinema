import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUserData } from '../actions/userAuth';

import SignIn from '../pages/auth/components/signIn';

class SignInContainer extends Component {
  authorization = (email, password) => {
    const { getUserData } = this.props;

    if (!email || !password) return;
    getUserData(
      `/api/user/?email=${encodeURIComponent(
        email,
      )}&password=${encodeURIComponent(password)}`,
    );
  };

  render() {
    return <SignIn authorization={this.authorization} />;
  }
}

SignInContainer.propTypes = {
  getUserData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getUserData: url => dispatch(fetchUserData(url)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(SignInContainer);
