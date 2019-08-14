import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './search-result';

const Search = ({
  film,
  disabledBtn,
  searchIsShown,
  handleChange,
  getDesiredFilm,
  closeSearchResult,
  buyTicket,
}) => (
  <div className="title__search">
    <input
      type="text"
      name="search"
      className="title__search__input"
      placeholder="Enter the name of film"
      onChange={handleChange}
    />
    <button
      type="button"
      className="btn title__search__btn-search"
      onClick={getDesiredFilm}
    >
      <i className="fas fa-search" />
    </button>
    <SearchResult
      film={film}
      searchIsShown={searchIsShown}
      disabledBtn={disabledBtn}
      buyTicket={buyTicket}
      closeSearchResult={closeSearchResult}
    />
  </div>
);

Search.propTypes = {
  film: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  searchIsShown: PropTypes.bool.isRequired,
  disabledBtn: PropTypes.bool.isRequired,
  getDesiredFilm: PropTypes.func.isRequired,
  buyTicket: PropTypes.func.isRequired,
  closeSearchResult: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
