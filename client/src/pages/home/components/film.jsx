import React from 'react';
import PropTypes from 'prop-types';

const Film = ({
  film: {
    poster, name, tags, description, startDate, endDate, ticketPrice,
  },
}) => (
  <div className="films-grid__film">
    <div className="films-grid__img-block">
      <img src={poster} alt="Film poster" className="films-grid__img" />
    </div>
    <div className="films-grid__info-block">
      <span className="films-grid__title">{name}</span>
      <span className="films-grid__categories">{tags}</span>
      <div className="films-grid__divide-block">
        <span className="films-grid__description">{description}</span>
        <div className="films-grid__action-block">
          <span className="films-grid__price">{ticketPrice}$</span>
          <span className="films-grid__date">
            {startDate} - {endDate}
          </span>
          <button type="button" className="btn films-grid__btn">
            <i className="fas fa-shopping-cart" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

Film.propTypes = {
  film: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export default Film;
