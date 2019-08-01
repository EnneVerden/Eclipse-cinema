import React from 'react';

import FilmsAdd from './filmsAdd';
import FilmsTable from '../../../containers/filmsTable';

const Films = () => (
  <section className="films tab-pane fade" id="films">
    <div className="films__block">
      <FilmsAdd />
      <FilmsTable />
    </div>
  </section>
);

export default Films;
