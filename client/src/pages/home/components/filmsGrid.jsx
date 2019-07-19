import React from 'react';
import PropTypes from 'prop-types';

import Film from './film';

const FilmsGrid = ({ filmsData }) => {
  const film = filmsData.map(item => <Film key={item._id} film={item} />);

  return (
    <section className="films-grid">
      <div className="films-grid__grid">
        <div className="films-grid__row">{film}</div>
      </div>
    </section>
  );
};

FilmsGrid.propTypes = {
  filmsData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

export default FilmsGrid;
