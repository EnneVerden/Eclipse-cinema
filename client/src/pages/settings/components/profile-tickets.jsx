import React from 'react';

import TicketsTable from '../../../containers/ticketsTable';

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

const ProfileTickets = () => (
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
      <TicketsTable />
    </div>
  </div>
);

export default ProfileTickets;
