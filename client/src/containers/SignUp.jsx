import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUp from '../pages/auth/components/signUp';
import { sendUserData } from '../actions/userRegister';
import throwAuthError from '../actions/authError';

class SignUpContainer extends Component {
  registration = (email, fullName, password, confirmPass) => {
    const { postUserData, throwAuthError } = this.props;

    if (!email || !fullName || !password || !confirmPass) return;
    if (password !== confirmPass) {
      throwAuthError('Wrong combination password and confirm password');
      return;
    }

    postUserData('/api/user/', {
      email,
      fullName,
      password,
    });
  };

  render() {
    const { errorText } = this.props;

    return <SignUp registration={this.registration} errorText={errorText} />;
  }
}

SignUpContainer.propTypes = {
  postUserData: PropTypes.func.isRequired,
  throwAuthError: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  errorText: state.authError.error,
});

const mapDispatchToProps = dispatch => ({
  postUserData: (url, body) => dispatch(sendUserData(url, body)),
  throwAuthError: errorText => dispatch(throwAuthError(errorText)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpContainer);
