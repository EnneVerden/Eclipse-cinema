import React from 'react';
import PropTypes from 'prop-types';

const UserRow = ({
  avatar, fullName, email, status, removeRequest,
}) => (
  <tr>
    <td>
      <img src={avatar} alt="Avatar" className="table__avatar" />
    </td>
    <td className="table__text">{fullName}</td>
    <td className="table__text">{email}</td>
    <td className="table__text">{status}</td>
    <td className="table__text">{String(removeRequest)}</td>
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
