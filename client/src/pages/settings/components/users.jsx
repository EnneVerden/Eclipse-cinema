import React from 'react';
import PropTypes from 'prop-types';

import UserRow from './userRow';

const Users = ({ usersData }) => {
  const users = usersData.map(item => <UserRow key={item._id} {...item} />);

  return (
    <section className="users tab-pane fade" id="users">
      <div className="users__block">
        <table className="table">
          <thead className="users__thead">
            <tr>
              <th>avatar</th>
              <th>full name</th>
              <th>e-mail</th>
              <th>status</th>
              <th>
                <div className="users__remove">
                  <span>remove request</span>
                  <button
                    type="button"
                    className="btn users__btn_remove"
                    title="Remove all requests"
                  >
                    <i className="fas fa-user-times" />
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
      </div>
    </section>
  );
};

Users.propTypes = {
  usersData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]).isRequired,
};

export default Users;
