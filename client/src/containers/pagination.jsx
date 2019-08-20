import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Pagination from '../pages/home/components/pagination';
import { fetchFilmsDataWithPage } from '../actions/filmsWithPage';

class PaginationContainer extends PureComponent {
  fetchFilmsDataWithPage = (pageNumber) => {
    const { getFilmsPerPage } = this.props;

    getFilmsPerPage(pageNumber);
  };

  render() {
    const { currentPage, numberFilmsPerPage, totalFilms } = this.props;

    return (
      <Pagination
        currentPage={currentPage}
        numberFilmsPerPage={numberFilmsPerPage}
        totalFilms={totalFilms}
        fetchFilmsDataWithPage={this.fetchFilmsDataWithPage}
      />
    );
  }
}

PaginationContainer.propTypes = {
  currentPage: PropTypes.number,
  numberFilmsPerPage: PropTypes.number,
  totalFilms: PropTypes.number,
  getFilmsPerPage: PropTypes.func.isRequired,
};

PaginationContainer.defaultProps = {
  currentPage: 1,
  numberFilmsPerPage: 12,
  totalFilms: 1,
};

const mapStateToProps = state => ({
  currentPage: state.filmsPerPage.currentPage,
  numberFilmsPerPage: state.filmsPerPage.numberFilmsPerPage,
  totalFilms: state.filmsPerPage.totalFilms,
  totalPages: state.filmsPerPage.totalPages,
});

const mapDispatchToProps = dispatch => ({
  getFilmsPerPage: pageNumber => dispatch(fetchFilmsDataWithPage(pageNumber)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationContainer);
