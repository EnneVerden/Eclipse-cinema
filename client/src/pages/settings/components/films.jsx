import React from 'react';

import FilmRow from './filmRow';

const Films = () => (
  <section
    className="films tab-pane fade"
    id="films"
    role="tabpanel"
    aria-labelledby="films-tab"
  >
    <div className="films__block">
      <table className="table">
        <thead className="films__thead">
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
        <tbody>
          <FilmRow />
        </tbody>
      </table>
    </div>
  </section>
);

export default Films;
