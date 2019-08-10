import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmsTable from '../pages/settings/components/filmsTable';

class FilmsTableContainer extends PureComponent {
  state = {
    modalFilm: {},
  };

  setModalInfo = (event) => {
    const filmName = event.target
      .closest('tr')
      .getElementsByClassName('films__col__film-name')[0].innerHTML;

    const { filmsData } = this.props;
    filmsData.forEach((item) => {
      if (item.name === filmName) {
        return this.setState({ modalFilm: item });
      }
      return null;
    });
  };

  render() {
    const { modalFilm } = this.state;
    const { filmsData } = this.props;

    return (
      <FilmsTable
        filmsData={filmsData}
        setModalInfo={this.setModalInfo}
        modalFilm={modalFilm}
      />
    );
  }
}

FilmsTableContainer.propTypes = {
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

const mapStateToProps = state => ({
  filmsData: state.filmsData,
});

export default connect(mapStateToProps)(FilmsTableContainer);
