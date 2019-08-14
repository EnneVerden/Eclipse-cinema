import React from 'react';
import PropTypes from 'prop-types';

const OrderRow = ({
  userName, avatar, poster, filmName, date,
}) => (
  <tr>
    <td>
      <img src={avatar} alt="Avatar" className="table__avatar" />
    </td>
    <td className="table__text">{userName}</td>
    <td>
      <img src={poster} alt="Poster" className="table__poster" />
    </td>
    <td className="table__text">{filmName}</td>
    <td className="table__text">{date}</td>
  </tr>
);

OrderRow.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  filmName: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default OrderRow;
