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
      `api/users/getUser/?email=${encodeURIComponent(
        email,
      )}&password=${encodeURIComponent(password)}`,
    );
  };

  render() {
    const { errorText } = this.props;
    return <SignIn authorization={this.authorization} errorText={errorText} />;
  }
}

SignInContainer.propTypes = {
  getUserData: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  errorText: state.authError.error,
});

const mapDispatchToProps = dispatch => ({
  getUserData: url => dispatch(fetchUserData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);
