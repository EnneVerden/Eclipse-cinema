import React from 'react';

class SignUp extends React.PureComponent {
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

  render() {
    return (
      <form
        action="#"
        className="auth__forms__form tab-pane fade"
        id="sign-up"
        aria-labelledby="signup-tab"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="fullName"
          onChange={this.handleChange}
          className="form-control auth__forms__inp"
          placeholder="Full name"
          required
        />
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
        <input
          type="password"
          name="confirmPass"
          onChange={this.handleChange}
          className="form-control auth__forms__inp"
          placeholder="Confirm password"
          required
        />
        <button type="submit" className="button auth__forms__btn btn">
          Create
        </button>
      </form>
    );
  }
}

export default SignUp;
