import React from 'react';
import PropTypes from 'prop-types';

const TicketRow = ({ name, poster, date }) => (
  <tr>
    <td>{name}</td>
    <td>
      <img src={poster} alt="Poster" className="profile__tickets-poster" />
    </td>
    <td>{date}</td>
    <td>
      <button type="button" className="btn" title="Remove">
        <i className="far fa-trash-alt" />
      </button>
    </td>
  </tr>
);

TicketRow.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default TicketRow;
