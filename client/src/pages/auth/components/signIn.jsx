import React from 'react';

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
        <button type="submit" className="button auth__forms__btn btn">
          Sign in
        </button>
      </form>
    );
  }
}

export default SignIn;
