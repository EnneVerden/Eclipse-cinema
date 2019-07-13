import React from 'react';

const Film = () => (
  <div className="films-grid__film">
    <div className="films-grid__img-block">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
        alt="Film poster"
        className="films-grid__img"
      />
    </div>
    <div className="films-grid__info-block">
      <span className="films-grid__title">Mortal Engines</span>
      <span className="films-grid__categories">Action, Adventure, Fantasy</span>
      <div className="films-grid__divide-block">
        <span className="films-grid__description">
          In a post-apocalyptic world where cities ride on wheels and consume
          each other to survive, two people meet in London and try to stop a
          conspiracy.
        </span>
        <div className="films-grid__action-block">
          <span className="films-grid__price">5$</span>
          <span className="films-grid__date">15.07.2019 - 21.07.2019</span>
          <button type="button" className="btn films-grid__btn">
            <i className="fas fa-shopping-cart" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Film;
