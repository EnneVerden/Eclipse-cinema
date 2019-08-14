import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../pages/app/app';
import { userRevisit } from '../actions/userRevisit';

class AppContainer extends PureComponent {
  state = {
    isLoading: false,
  };

  componentDidMount = () => {
    const { getUserData } = this.props;

    if (localStorage.getItem('token')) {
      return getUserData();
    }
    return this.setState({ isLoading: true });
  };

  componentDidUpdate = (prevProps) => {
    const { email } = this.props;

    if (email !== prevProps.email) {
      this.setState({ isLoading: true });
    }
  };

  render() {
    const { isLoading } = this.state;
    const { email } = this.props;
    return <App isLoading={isLoading} email={email} />;
  }
}

AppContainer.propTypes = {
  email: PropTypes.string,
  getUserData: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  email: '',
};

const mapStateToProps = state => ({
  email: state.userData.email,
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(userRevisit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
