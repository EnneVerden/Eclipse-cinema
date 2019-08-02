import React from 'react';
import PropTypes from 'prop-types';

const FilmsAddPanel = ({ handeChange, addFilm }) => (
  <form
    action="#"
    className="films__add__panel"
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <div className="films__add__panel__left-side">
      <input
        type="text"
        className="form-control films__add__panel__inp"
        name="poster"
        placeholder="Poster url"
        onChange={handeChange}
        required
      />
      <input
        type="text"
        className="form-control films__add__panel__inp"
        name="name"
        placeholder="Film name"
        onChange={handeChange}
        required
      />
      <input
        type="text"
        className="form-control films__add__panel__inp"
        name="tags"
        placeholder="Tags"
        onChange={handeChange}
        required
      />
      <input
        type="date"
        className="form-control films__add__panel__inp"
        name="startDate"
        placeholder="Start date"
        onChange={handeChange}
        required
      />
      <input
        type="date"
        className="form-control films__add__panel__inp"
        name="endDate"
        placeholder="End date"
        onChange={handeChange}
        required
      />
      <input
        type="number"
        className="form-control films__add__panel__inp"
        name="ticketPrice"
        placeholder="Ticket price"
        onChange={handeChange}
        required
      />
    </div>

    <div className="films__add__panel__right-side">
      <textarea
        className="form-control films__add__panel__inp"
        name="description"
        rows="8"
        placeholder="Description"
        onChange={handeChange}
        required
      />
      <button
        type="submit"
        className="btn films__add__panel__btn"
        onClick={addFilm}
      >
        Save
      </button>
    </div>
  </form>
);

FilmsAddPanel.propTypes = {
  handeChange: PropTypes.func.isRequired,
  addFilm: PropTypes.func.isRequired,
};

export default FilmsAddPanel;
