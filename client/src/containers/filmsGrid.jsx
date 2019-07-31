import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilmsGrid from '../pages/home/components/filmsGrid';
import { fetchFilmsData } from '../actions/filmsData';

class FilmsGridContainer extends Component {
  componentDidMount() {
    const { getFilmsData } = this.props;

    getFilmsData('/api/films');
  }

  render() {
    const { filmsData, userTickets } = this.props;

    return <FilmsGrid filmsData={filmsData} userTickets={userTickets} />;
  }
}

FilmsGridContainer.propTypes = {
  getFilmsData: PropTypes.func.isRequired,
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  userTickets: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

const mapStateToProps = state => ({
  userTickets: state.userData.tickets,
  filmsData: state.filmsData,
});

const mapDispatchToProps = dispatch => ({
  getFilmsData: url => dispatch(fetchFilmsData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsGridContainer);
