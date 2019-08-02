import { ADD_FILM_SUCCESS } from '../actionTypes';

export const addFilmSuccess = film => ({
  type: ADD_FILM_SUCCESS,
  film,
});

export const addFilm = (url, body) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const film = await response.json();

    dispatch(addFilmSuccess(film));
  } catch (error) {
    console.log(`Something wrong.\nPerhaps it's ${error}`);
  }
};
