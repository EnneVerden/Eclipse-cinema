import React from 'react';
import PropTypes from 'prop-types';

const UserRow = ({
  avatar, fullName, email, status, removeRequest,
}) => (
  <tr>
    <td>
      <img src={avatar} alt="Avatar" className="users__avatar" />
    </td>
    <td className="users__col__user-name">{fullName}</td>
    <td className="users__col__user-email">{email}</td>
    <td className="users__col__user-status">{status}</td>
    <td className="users__col__user-request">{String(removeRequest)}</td>
  </tr>
);

UserRow.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  removeRequest: PropTypes.bool.isRequired,
};

export default UserRow;
