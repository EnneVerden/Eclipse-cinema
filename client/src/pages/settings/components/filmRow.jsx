import React from 'react';

const FilmRow = () => (
  <tr>
    <td className="films__col">Mortal engines</td>
    <td className="films__col">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
        alt="Poster"
        className="films__poster"
      />
    </td>
    <td className="films__col">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, magni
      quisquam corrupti.
    </td>
    <td className="films__col">Action, Fantasy, Comedy</td>
    <td className="films__col">12.07.19</td>
    <td className="films__col">17.07.19</td>
    <td className="films__col films__price">5$</td>
    <td className="films__col films__btns">
      <button type="button" className="btn films__btn_remove" title="Remove">
        <i className="far fa-trash-alt" />
      </button>
    </td>
  </tr>
);

export default FilmRow;
