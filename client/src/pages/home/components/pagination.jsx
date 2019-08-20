import React from 'react';
import PropTypes from 'prop-types';

import Page from './page';

const Pagination = ({
  currentPage,
  numberFilmsPerPage,
  totalFilms,
  fetchFilmsDataWithPage,
}) => {
  const totalPages = Math.ceil(totalFilms / numberFilmsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i += 1) pageNumbers.push(i);

  const renderPage = pageNumbers.map((number) => {
    if (
      number === 1
      || number === totalPages
      || (number >= currentPage - 2 && number <= currentPage + 2)
    ) {
      return (
        <Page
          key={number}
          pageNumber={number}
          currentPage={currentPage}
          fetchFilmsDataWithPage={fetchFilmsDataWithPage}
        />
      );
    }
    return null;
  });

  return (
    <section className="pagination">
      <div className="pagination__block">{renderPage}</div>
    </section>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberFilmsPerPage: PropTypes.number.isRequired,
  totalFilms: PropTypes.number.isRequired,
  fetchFilmsDataWithPage: PropTypes.func.isRequired,
};

export default Pagination;
