import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilmsGrid from '../pages/home/components/filmsGrid';
import { fetchFilmsDataWithPage } from '../actions/filmsWithPage';

class FilmsGridContainer extends PureComponent {
  componentDidMount = () => {
    const { getFilmsData, history } = this.props;
    const params = history.location.search;
    const pageNumber = params.split('=')[1] || 1;

    getFilmsData(pageNumber);
  };

  render() {
    const { filmsData } = this.props;

    return <FilmsGrid filmsData={filmsData} />;
  }
}

FilmsGridContainer.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getFilmsData: PropTypes.func.isRequired,
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};

FilmsGridContainer.defaultProps = {
  filmsData: [],
};

const mapStateToProps = state => ({
  filmsData: state.filmsPerPage.data,
});

const mapDispatchToProps = dispatch => ({
  getFilmsData: pageNumber => dispatch(fetchFilmsDataWithPage(pageNumber)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsGridContainer);
