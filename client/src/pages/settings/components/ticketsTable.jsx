import React from 'react';
import PropTypes from 'prop-types';

import TicketRow from './ticketRow';

const TicketsTable = ({ tickets }) => {
  const ticket = tickets.map(item => (
    <TicketRow
      key={item._id}
      name={item.name}
      poster={item.poster}
      date={item.startDate}
    />
  ));

  return (
    <table className="table profile__tickets-table">
      <thead>
        <tr>
          <th>name</th>
          <th>poster</th>
          <th>date</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>{ticket}</tbody>
    </table>
  );
};

TicketsTable.propTypes = {
  tickets: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default TicketsTable;
