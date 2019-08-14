import React from 'react';

import FilmsAdd from './filmsAdd';
import FilmsTable from '../../../containers/filmsTable';

const Films = () => (
  <section className="table-section tab-pane fade" id="films">
    <div className="table-block films__block">
      <FilmsAdd />
      <FilmsTable />
    </div>
  </section>
);

export default Films;
