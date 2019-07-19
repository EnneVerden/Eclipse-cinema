import React from 'react';
import PropTypes from 'prop-types';

import Film from './film';
import Preloader from '../../../shared/preloader/Preloader';

const FilmsGrid = ({ filmsData }) => {
  const film = filmsData.map(item => <Film key={item._id} film={item} />);

  const content = filmsData.length ? film : <Preloader />;

  return (
    <section className="films-grid">
      <div className="films-grid__grid">
        <div className="films-grid__row">{content}</div>
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
