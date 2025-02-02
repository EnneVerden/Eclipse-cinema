import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUp from '../pages/auth/components/signUp';
import { sendUserData } from '../actions/userRegister';
import { throwWarning } from '../actions/throwWarning';

class SignUpContainer extends PureComponent {
  state = {
    fullName: '',
    email: '',
    password: '',
    confirmPass: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  registration = () => {
    const {
      email, fullName, password, confirmPass,
    } = this.state;
    const { postUserData, throwAuthErr } = this.props;

    if (!email || !fullName || !password || !confirmPass) return;
    if (password !== confirmPass) {
      throwAuthErr('Wrong combination password and confirm password!', 'error');
      return;
    }

    postUserData({
      email,
      fullName,
      password,
    });
  };

  render() {
    return (
      <SignUp
        handleChange={this.handleChange}
        registration={this.registration}
      />
    );
  }
}

SignUpContainer.propTypes = {
  postUserData: PropTypes.func.isRequired,
  throwAuthErr: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  postUserData: body => dispatch(sendUserData(body)),
  throwAuthErr: (warningText, warningType) => dispatch(throwWarning(warningText, warningType)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(SignUpContainer);
