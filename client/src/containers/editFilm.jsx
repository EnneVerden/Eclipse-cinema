import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditFilm from '../shared/modal/components/editFilm';
import { changeFilm } from '../actions/filmChange';

class EditFilmContainer extends PureComponent {
  state = {
    poster: '',
    name: '',
    tags: '',
    description: '',
    startDate: '',
    endDate: '',
    ticketPrice: '',
  };

  componentDidUpdate = (prevProps) => {
    const { modalContent } = this.props;

    if (modalContent !== prevProps.modalContent) {
      this.setState({
        poster: modalContent.poster,
        name: modalContent.name,
        tags: modalContent.tags,
        description: modalContent.description,
        startDate: modalContent.startDate.replace(/\./g, '-'),
        endDate: modalContent.endDate.replace(/\./g, '-'),
        ticketPrice: String(modalContent.ticketPrice),
      });
    }
  };

  saveChanges = () => {
    const {
      poster,
      name,
      tags,
      description,
      startDate,
      endDate,
      ticketPrice,
    } = this.state;
    const { modalContent, changeFilmInfo } = this.props;

    changeFilmInfo(`api/films/${modalContent._id}/change`, {
      poster,
      name,
      tags,
      description,
      startDate: startDate.replace(/-/g, '.'),
      endDate: endDate.replace(/-/g, '.'),
      ticketPrice,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      poster,
      name,
      tags,
      description,
      startDate,
      endDate,
      ticketPrice,
    } = this.state;

    return (
      <EditFilm
        poster={poster}
        name={name}
        tags={tags}
        description={description}
        startDate={startDate}
        endDate={endDate}
        ticketPrice={ticketPrice}
        handleChange={this.handleChange}
        saveChanges={this.saveChanges}
      />
    );
  }
}

EditFilmContainer.propTypes = {
  modalContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  changeFilmInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilmInfo: (url, body) => dispatch(changeFilm(url, body)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(EditFilmContainer);
