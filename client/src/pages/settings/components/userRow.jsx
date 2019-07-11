import React from 'react';

const UserRow = () => (
  <tr>
    <td className="users__col">
      <img
        src="https://www.manohman.com.au/favicon.png"
        alt="Avatar"
        className="users__avatar"
      />
    </td>
    <td className="users__col">Adamovich Pavel</td>
    <td className="users__col">enneverden@gmail.com</td>
    <td className="users__col">Admin</td>
    <td className="users__col">No</td>
  </tr>
);

export default UserRow;
