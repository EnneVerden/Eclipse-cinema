import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ handleChange, authorization, errorText }) => (
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
      onChange={handleChange}
      className="form-control auth__forms__inp"
      placeholder="E-mail"
      required
    />
    <input
      type="password"
      name="password"
      onChange={handleChange}
      className="form-control auth__forms__inp"
      placeholder="Password"
      required
    />
    <p className="warning">{errorText}</p>
    <button
      type="submit"
      className="button auth__forms__btn btn"
      onClick={authorization}
    >
      Sign in
    </button>
  </form>
);

SignIn.propTypes = {
  handleChange: PropTypes.func.isRequired,
  authorization: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
};

export default SignIn;
