import React from 'react';

import UserRow from './userRow';

const Users = () => (
  <section
    className="users tab-pane fade"
    id="users"
    role="tabpanel"
    aria-labelledby="users-tab"
  >
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
        <tbody>
          <UserRow />
        </tbody>
      </table>
    </div>
  </section>
);

export default Users;
