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
    const { authorization, errorText } = this.props;

    return (
      <form
        action="#"
        className="auth__forms__form tab-pane fade show active"
        id="sign-in"
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
        <p className="warning">{errorText}</p>
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
  errorText: PropTypes.string.isRequired,
};

export default SignIn;
