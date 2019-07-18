import React from 'react';
import PropTypes from 'prop-types';

class SignIn extends React.PureComponent {
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

  render() {
    const { email, password } = this.state;
    const { authorization } = this.props;

    return (
      <form
        action="#"
        className="auth__forms__form tab-pane fade show active"
        id="sign-in"
        aria-labelledby="signin-tab"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          className="form-control auth__forms__inp"
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          className="form-control auth__forms__inp"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="button auth__forms__btn btn"
          onClick={() => authorization(email, password)}
        >
          Sign in
        </button>
      </form>
    );
  }
}

SignIn.propTypes = {
  authorization: PropTypes.func.isRequired,
};

export default SignIn;
