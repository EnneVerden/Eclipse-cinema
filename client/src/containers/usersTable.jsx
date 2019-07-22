import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Users from '../pages/settings/components/users';

import { fetchUsersData } from '../actions/usersData';

class UsersContainer extends Component {
  componentDidMount() {
    const { getUsersData } = this.props;

    getUsersData('/api/users');
  }

  render() {
    const { usersData } = this.props;

    return <Users usersData={usersData} />;
  }
}

UsersContainer.propTypes = {
  usersData: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
  getUsersData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  usersData: state.usersData,
});

const mapDispatchToProps = dispatch => ({
  getUsersData: url => dispatch(fetchUsersData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersContainer);
