import React from 'react';
import PropTypes from 'prop-types';

const FilmRow = ({
  film: {
    name, poster, description, tags, startDate, endDate, ticketPrice,
  },
  deleteFilm,
}) => (
  <tr>
    <td className="films__col__film-name">{name}</td>
    <td>
      <img src={poster} alt="Poster" className="films__poster" />
    </td>
    <td className="films__col__film-desc">{description}</td>
    <td className="films__col__film-tags">{tags}</td>
    <td className="films__col__film-date">
      {startDate} - {endDate}
    </td>
    <td className="films__col__film-price">{ticketPrice}$</td>
    <td>
      <button
        type="button"
        className="btn films__btn_remove"
        title="Remove"
        onClick={deleteFilm}
      >
        <i className="far fa-trash-alt" />
      </button>
    </td>
  </tr>
);

FilmRow.propTypes = {
  film: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  deleteFilm: PropTypes.func.isRequired,
};

export default FilmRow;
