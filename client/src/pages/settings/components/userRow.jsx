import React from 'react';
import PropTypes from 'prop-types';

const UserRow = ({
  avatar, fullName, email, status, removeRequest,
}) => (
  <tr>
    <td className="users__col">
      <img src={avatar} alt="Avatar" className="users__avatar" />
    </td>
    <td className="users__col">{fullName}</td>
    <td className="users__col">{email}</td>
    <td className="users__col">{status}</td>
    <td className="users__col">{String(removeRequest)}</td>
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
