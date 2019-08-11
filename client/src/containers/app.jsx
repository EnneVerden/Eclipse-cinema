import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../pages/app/app';
import { userRevisit } from '../actions/userRevisit';

class AppContainer extends PureComponent {
  componentDidMount = () => {
    const { getUserData } = this.props;

    getUserData();
  };

  render() {
    const { email } = this.props;
    return <App email={email} />;
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
