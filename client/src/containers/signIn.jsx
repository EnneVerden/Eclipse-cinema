import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUserData } from '../actions/userAuth';

import SignIn from '../pages/auth/components/signIn';

class SignInContainer extends PureComponent {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  authorization = () => {
    const { email, password } = this.state;
    const { getUserData } = this.props;

    if (!email || !password) return;
    getUserData(email, password);
  };

  render() {
    return (
      <SignIn
        handleChange={this.handleChange}
        authorization={this.authorization}
      />
    );
  }
}

SignInContainer.propTypes = {
  getUserData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getUserData: (email, password) => dispatch(fetchUserData(email, password)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(SignInContainer);
