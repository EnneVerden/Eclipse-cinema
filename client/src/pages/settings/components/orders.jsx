import React from 'react';
import PropTypes from 'prop-types';

import OrderRow from './orderRow';
import Preloader from '../../../shared/preloader/Preloader';

const Orders = ({ orders }) => {
  const films = [];
  orders.forEach((item) => {
    item.tickets.forEach(film => films.push(
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

  const content = orders.length ? (
    films
  ) : (
    <tr>
      <td colSpan="5">
        <Preloader />
      </td>
    </tr>
  )

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
