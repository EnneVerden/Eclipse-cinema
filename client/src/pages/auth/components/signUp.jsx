import React from 'react';
import PropTypes from 'prop-types';

const SignUp = ({ handleChange, registration, errorText }) => (
  <form
    action="#"
    className="auth__forms__form tab-pane fade"
    id="sign-up"
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <input
      type="text"
      name="fullName"
      onChange={handleChange}
      className="form-control auth__forms__inp"
      placeholder="Full name"
      required
    />
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
    <input
      type="password"
      name="confirmPass"
      onChange={handleChange}
      className="form-control auth__forms__inp"
      placeholder="Confirm password"
      required
    />
    <p className="warning">{errorText}</p>
    <button
      type="submit"
      className="button auth__forms__btn btn"
      onClick={registration}
    >
      Create
    </button>
  </form>
);

SignUp.propTypes = {
  handleChange: PropTypes.func.isRequired,
  registration: PropTypes.func.isRequired,
  errorText: PropTypes.string,
};

SignUp.defaultProps = {
  errorText: '',
};

export default SignUp;
