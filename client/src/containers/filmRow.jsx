import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmRow from '../pages/settings/components/filmRow';
import { deleteFilm } from '../actions/deleteFilm';

class FilmRowContainer extends PureComponent {
  deleteFilm = () => {
    const {
      removeFilm,
      film: { _id },
    } = this.props;

    removeFilm(_id);
  };

  render() {
    const { film, setModalInfo } = this.props;

    return (
      <FilmRow
        film={film}
        deleteFilm={this.deleteFilm}
        setModalInfo={setModalInfo}
      />
    );
  }
}

FilmRowContainer.propTypes = {
  removeFilm: PropTypes.func.isRequired,
  film: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  setModalInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeFilm: filmID => dispatch(deleteFilm(filmID)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(FilmRowContainer);
