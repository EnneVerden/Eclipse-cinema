import React from 'react';
import PropTypes from 'prop-types';

import FilmRow from './filmRow';

const Films = ({ filmsData }) => {
  const films = filmsData.map(item => <FilmRow key={item._id} {...item} />);

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
              <th>start date</th>
              <th>end date</th>
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

Films.propTypes = {
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

export default Films;
