import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const scrollUp = (currentPage, pageNumber) => {
  if (currentPage !== pageNumber) {
    window.scrollTo(0, 0);
  }
};

const Page = ({ pageNumber, currentPage, fetchFilmsDataWithPage }) => (
  <Link
    to={{
      pathname: '/home',
      search: pageNumber !== 1 ? `page=${pageNumber}` : null,
    }}
    className={`pagination__link ${
      currentPage === pageNumber ? 'page_active' : null
    }`}
    onClick={() => {
      scrollUp(currentPage, pageNumber);
      fetchFilmsDataWithPage(pageNumber);
    }}
  >
    <span className="pagination__page">{pageNumber}</span>
  </Link>
);

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  fetchFilmsDataWithPage: PropTypes.func.isRequired,
};

export default Page;
