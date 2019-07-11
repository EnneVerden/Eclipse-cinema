import React from 'react';

const Info = () => (
  <section className="info">
    <div className="info__block">
      <h1 className="info__title">Films</h1>
      <div className="info__filter">
        <i className="fas fa-search info__search" />
        <input
          type="text"
          className="info__input"
          placeholder="Enter the name of film"
        />
      </div>
    </div>
  </section>
);

export default Info;
