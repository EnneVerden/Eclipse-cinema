import React from 'react';
import PropTypes from 'prop-types';

import UserRow from './userRow';
import Preloader from '../../../shared/preloader/Preloader';

const Users = ({ usersData, removeUsers }) => {
  const user = usersData.map(item => <UserRow key={item._id} {...item} />);

  const content = usersData.length ? (
    user
  ) : (
    <tr>
      <td colSpan="5">
        <Preloader />
      </td>
    </tr>
  );

  return (
    <section className="table-section tab-pane fade" id="users">
      <div className="table-block users__block">
        <button
          type="button"
          className="btn users__phone-btn_remove"
          onClick={removeUsers}
        >
          Delete users with positive remove request
          <i className="fas fa-user-times" />
        </button>
        <table className="table">
          <thead>
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
                    title="Remove users with deleted accounts"
                    onClick={removeUsers}
                  >
                    <i className="fas fa-user-times" />
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
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
  removeUsers: PropTypes.func.isRequired,
};

export default Users;
