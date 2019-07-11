import React from 'react';

import Film from './film';

const FilmsGrid = () => (
  <section className="films-grid">
    <div className="films-grid__grid">
      <div className="films-grid__row">
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
      </div>
    </div>
  </section>
);

export default FilmsGrid;
