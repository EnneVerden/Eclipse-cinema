import React from 'react';
import PropTypes from 'prop-types';

import FilmRow from '../../../containers/filmRow';
import Preloader from '../../../shared/preloader/Preloader';

const FilmsTable = ({ filmsData }) => {
  const film = filmsData.map(item => <FilmRow key={item._id} film={item} />);

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
  );
};

FilmsTable.propTypes = {
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

export default FilmsTable;
