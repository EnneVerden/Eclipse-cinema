import React from 'react';
import PropTypes from 'prop-types';

const FilmRow = ({
  name,
  poster,
  description,
  tags,
  startDate,
  endDate,
  ticketPrice,
}) => (
  <tr>
    <td className="films__col">{name}</td>
    <td className="films__col">
      <img src={poster} alt="Poster" className="films__poster" />
    </td>
    <td className="films__col">{description}</td>
    <td className="films__col">{tags}</td>
    <td className="films__col">{startDate}</td>
    <td className="films__col">{endDate}</td>
    <td className="films__col films__price">{ticketPrice}</td>
    <td className="films__col films__btns">
      <button type="button" className="btn films__btn_remove" title="Remove">
        <i className="far fa-trash-alt" />
      </button>
    </td>
  </tr>
);

FilmRow.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  ticketPrice: PropTypes.number.isRequired,
};

export default FilmRow;
