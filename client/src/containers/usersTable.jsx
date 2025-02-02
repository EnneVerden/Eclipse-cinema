import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UsersTable from '../pages/settings/components/usersTable';

import { fetchUsersData } from '../actions/usersData';
import { deleteUsers } from '../actions/deleteUsers';

class UsersContainer extends PureComponent {
  componentDidMount = () => {
    const { getUsersData } = this.props;

    getUsersData('api/users/get');
  }

  removeUsers = () => {
    const { deleteAccounts, usersData } = this.props;
    const usersArray = [];

    usersData.forEach(item => (item.removeRequest ? usersArray.push(item._id) : null));

    deleteAccounts({ _id: usersArray });
  };

  render() {
    const { usersData } = this.props;

    return <UsersTable usersData={usersData} removeUsers={this.removeUsers} />;
  }
}

UsersContainer.propTypes = {
  usersData: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
  getUsersData: PropTypes.func.isRequired,
  deleteAccounts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  usersData: state.usersData,
});

const mapDispatchToProps = dispatch => ({
  getUsersData: url => dispatch(fetchUsersData(url)),
  deleteAccounts: body => dispatch(deleteUsers(body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersContainer);
