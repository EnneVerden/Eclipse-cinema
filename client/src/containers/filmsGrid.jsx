import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilmsGrid from '../pages/home/components/filmsGrid';
import { fetchFilmsData } from '../actions/filmsData';

class FilmsGridContainer extends PureComponent {
  componentDidMount = () => {
    const { getFilmsData } = this.props;

    getFilmsData();
  };

  render() {
    const { filmsData } = this.props;

    return <FilmsGrid filmsData={filmsData} />;
  }
}

FilmsGridContainer.propTypes = {
  getFilmsData: PropTypes.func.isRequired,
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
  getFilmsData: () => dispatch(fetchFilmsData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsGridContainer);
