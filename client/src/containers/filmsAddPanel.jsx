import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmsAddPanel from '../pages/settings/components/filmsAddPanel';
import { addFilm } from '../actions/addFilm';

class FilmsAddPanelContainer extends PureComponent {
  state = {
    poster: '',
    name: '',
    tags: '',
    description: '',
    startDate: '',
    endDate: '',
    ticketPrice: '',
  };

  handeChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  addFilm = () => {
    const {
      poster,
      name,
      tags,
      description,
      startDate,
      endDate,
      ticketPrice,
    } = this.state;
    const { addNewFilm } = this.props;

    addNewFilm('api/films/add', {
      poster,
      name,
      tags,
      description,
      startDate,
      endDate,
      ticketPrice,
    });
  };

  render() {
    return (
      <FilmsAddPanel handeChange={this.handeChange} addFilm={this.addFilm} />
    );
  }
}

FilmsAddPanelContainer.propTypes = {
  addNewFilm: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addNewFilm: (url, body) => dispatch(addFilm(url, body)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(FilmsAddPanelContainer);
