import { FETCH_FILMS_DATA_SUCCESS } from '../actionTypes';

export const fetchFilmsDataSuccess = films => ({
  type: FETCH_FILMS_DATA_SUCCESS,
  films,
});

export const fetchFilmsData = url => async (dispatch) => {
  try {
    const response = await fetch(url);
    const films = await response.json();

    dispatch(fetchFilmsDataSuccess(films));
  } catch (error) {
    console.log(`Something wrong.\nPerhaps it's ${error}`);
  }
};
