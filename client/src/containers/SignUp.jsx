import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUp from '../pages/auth/components/signUp';
import { sendUserData } from '../actions/userRegister';

class SignUpContainer extends Component {
  registration = (email, fullName, password, confirmPass) => {
    const { postUserData } = this.props;

    if (!email || !fullName || !password || !confirmPass) return;

    postUserData('/api/user/', {
      email,
      fullName,
      password,
    });
  };

  render() {
    return <SignUp registration={this.registration} />;
  }
}

SignUpContainer.propTypes = {
  postUserData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  postUserData: (url, body) => dispatch(sendUserData(url, body)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(SignUpContainer);
