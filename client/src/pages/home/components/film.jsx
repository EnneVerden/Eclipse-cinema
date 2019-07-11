import React from 'react';

const Film = () => (
  <div className="films-grid__film">
    <img
      src="https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
      alt="Film poster"
      className="films-grid__img"
    />
    <span className="films-grid__name">Mortal Engines</span>
    <div className="films-grid__info">
      <span className="films-grid__price">5$</span>
      <button type="button" className="btn films-grid__btn">
        <i className="fas fa-shopping-cart" />
      </button>
    </div>
  </div>
);

export default Film;
