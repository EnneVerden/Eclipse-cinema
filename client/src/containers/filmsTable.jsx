import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilmsTable from '../pages/settings/components/filmsTable';
import { deleteFilm } from '../actions/deleteFilm';

class FilmTableContainer extends Component {
  deleteFilm = (filmID) => {
    const { removeFilm } = this.props;

    removeFilm(`api/films/${filmID}/delete`);
  };

  render() {
    const { filmsData } = this.props;
    return <FilmsTable deleteFilm={this.deleteFilm} filmsData={filmsData} />;
  }
}

FilmTableContainer.propTypes = {
  removeFilm: PropTypes.func.isRequired,
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

const mapStateToProps = state => ({
  filmsData: state.filmsData,
});

const mapDispatchToProps = dispatch => ({
  removeFilm: url => dispatch(deleteFilm(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmTableContainer);
