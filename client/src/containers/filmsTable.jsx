import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmsTable from '../pages/settings/components/filmsTable';
import { fetchFilmsData } from '../actions/filmsData';

class FilmsTableContainer extends PureComponent {
  state = {
    modalFilm: {},
  };

  componentDidMount = () => {
    const { getFilmsData } = this.props;

    getFilmsData();
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
  getFilmsData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filmsData: state.filmsData,
});

const mapDispatchToProps = dispath => ({
  getFilmsData: () => dispath(fetchFilmsData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsTableContainer);
