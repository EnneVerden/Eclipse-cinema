import React from 'react';
import PropTypes from 'prop-types';

const TicketRow = ({ ticket: { name, poster, startDate }, deleteTicket }) => (
  <tr>
    <td className="profile__tickets__col-name">{name}</td>
    <td>
      <img src={poster} alt="Poster" className="profile__tickets-poster" />
    </td>
    <td className="profile__tickets__col-date">{startDate}</td>
    <td>
      <button
        type="button"
        className="btn profile__tickets__btn_remove"
        onClick={deleteTicket}
      >
        <i className="far fa-trash-alt" />
      </button>
    </td>
  </tr>
);

TicketRow.propTypes = {
  ticket: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  deleteTicket: PropTypes.func.isRequired,
};

export default TicketRow;
