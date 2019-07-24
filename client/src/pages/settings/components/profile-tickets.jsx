import React from 'react';
import PropTypes from 'prop-types';

import TicketRow from './ticketRow';

const showTickets = () => {
  const tickets = document.querySelector('#profile-tickets');
  const arrow = document.querySelectorAll('.profile__tickets-arrow');

  tickets.classList.toggle('profile__tickets-block_active');
  arrow.forEach(item => item.classList.toggle('profile__tickets-arrow_active'));

  if (tickets.classList.contains('profile__tickets-block_active')) {
    tickets.style.display = 'block';
  } else {
    setTimeout(() => {
      tickets.style.display = 'none';
    }, 500);
  }
};

const MyTickets = ({ tickets }) => {
  const ticket = tickets.map(item => (
    <TicketRow
      key={item._id}
      name={item.name}
      poster={item.poster}
      date={item.startDate}
    />
  ));

  return (
    <div className="profile__tickets">
      <button
        type="button"
        className="btn profile__tickets_show"
        onClick={showTickets}
      >
        Show my tickets
        <i className="fas fa-chevron-down profile__tickets-arrow profile__tickets-arrow_active" />
        <i className="fas fa-chevron-up profile__tickets-arrow" />
      </button>
      <div className="profile__tickets-block" id="profile-tickets">
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
      </div>
    </div>
  );
};

MyTickets.propTypes = {
  tickets: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default MyTickets;
