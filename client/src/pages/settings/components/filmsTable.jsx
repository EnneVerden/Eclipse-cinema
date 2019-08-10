import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FilmRow from '../../../containers/filmRow';
import Preloader from '../../../shared/preloader/Preloader';
import Modal from '../../../shared/modal/modal';

const FilmsTable = ({ filmsData, modalFilm, setModalInfo }) => {
  const film = filmsData.map(item => (
    <FilmRow key={item._id} film={item} setModalInfo={setModalInfo} />
  ));

  const content = filmsData.length ? (
    film
  ) : (
    <tr>
      <td colSpan="7">
        <Preloader />
      </td>
    </tr>
  );

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>poster</th>
            <th>description</th>
            <th>tags</th>
            <th>display date</th>
            <th>ticket price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
      <Modal modalContent={modalFilm} />
    </Fragment>
  );
};

FilmsTable.propTypes = {
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  modalFilm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  setModalInfo: PropTypes.func.isRequired,
};

export default FilmsTable;
