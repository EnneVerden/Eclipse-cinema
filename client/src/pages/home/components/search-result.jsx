import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = ({
  film: {
    name, poster, tags, description, startDate, endDate, ticketPrice,
  },
  searchIsShown,
  disabledBtn,
  buyTicket,
  closeSearchResult,
}) => (
  <div
    className={`title__search__result ${
      searchIsShown ? 'title__search__result_active' : null
    }`}
  >
    <div className="title__search__result__img-block">
      <img
        src={poster}
        alt="Film poster"
        className="title__search__result__img"
      />
    </div>
    <div className="title__search__result__info-block">
      <span className="title__search__result__title">{name}</span>
      <span className="title__search__result__categories">{tags}</span>
      <div className="title__search__result__divide-block">
        <span className="title__search__result__description">
          {description}
        </span>
        <div className="title__search__result__action-block">
          <span className="title__search__result__price">{ticketPrice}$</span>
          <span className="title__search__result__date">
            {startDate} - {endDate}
          </span>
          <button
            type="button"
            className={`btn title__search__result__btn-buy ${
              disabledBtn ? 'title__search__result__btn-buy_purchased' : null
            }`}
            onClick={buyTicket}
            disabled={disabledBtn}
          >
            {disabledBtn ? (
              <i className="fas fa-check" />
            ) : (
              <i className="fas fa-shopping-cart" />
            )}
          </button>
        </div>
      </div>
    </div>
    <button
      type="button"
      className="btn title__search__result__btn-close"
      onClick={closeSearchResult}
    >
      <i className="fas fa-times" />
    </button>
  </div>
);

SearchResult.propTypes = {
  film: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  searchIsShown: PropTypes.bool.isRequired,
  disabledBtn: PropTypes.bool.isRequired,
  buyTicket: PropTypes.func.isRequired,
  closeSearchResult: PropTypes.func.isRequired,
};

export default SearchResult;
