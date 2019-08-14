import React from 'react';
import PropTypes from 'prop-types';

import OrderRow from './orderRow';

const Orders = ({ orders }) => {
  const content = [];
  orders.forEach((item) => {
    item.tickets.forEach(film => content.push(
      <OrderRow
        key={item._id + film._id}
        userName={item.fullName}
        avatar={item.avatar}
        poster={film.poster}
        filmName={film.name}
        date={film.startDate}
      />,
    ));
  });

  return (
    <section className="table-section tab-pane fade" id="orders">
      <div className="table-block orders__block">
        <table className="table">
          <thead className="orders__thead">
            <tr>
              <th>avatar</th>
              <th>user name</th>
              <th>poster</th>
              <th>film name</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </section>
  );
};

Orders.propTypes = {
  orders: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Orders.defaultProps = {
  orders: [],
};

export default Orders;
