import React from 'react';
import PropTypes from 'prop-types';

import FilmRow from './filmRow';

const FilmsTable = ({ filmsData, deleteFilm }) => {
  const films = filmsData.map(item => (
    <FilmRow key={item._id} {...item} deleteFilm={deleteFilm} />
  ));

  return (
    <section className="films tab-pane fade" id="films">
      <div className="films__block">
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
          <tbody>{films}</tbody>
        </table>
      </div>
    </section>
  );
};

FilmsTable.propTypes = {
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  deleteFilm: PropTypes.func.isRequired,
};

export default FilmsTable;
