import React from 'react';
import PropTypes from 'prop-types';

const FilmsAddPanel = ({
  handeChange,
  addFilm,
  poster,
  name,
  tags,
  description,
  startDate,
  endDate,
  ticketPrice,
}) => (
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
        value={poster}
        placeholder="Poster url"
        onChange={handeChange}
        required
      />
      <input
        type="text"
        className="form-control films__add__panel__inp"
        name="name"
        value={name}
        placeholder="Film name"
        onChange={handeChange}
        required
      />
      <input
        type="text"
        className="form-control films__add__panel__inp"
        name="tags"
        value={tags}
        placeholder="Tags"
        onChange={handeChange}
        required
      />
      <input
        type="date"
        className="form-control films__add__panel__inp"
        name="startDate"
        value={startDate}
        placeholder="Start date"
        onChange={handeChange}
        required
      />
      <input
        type="date"
        className="form-control films__add__panel__inp"
        name="endDate"
        value={endDate}
        placeholder="End date"
        onChange={handeChange}
        required
      />
      <input
        type="number"
        className="form-control films__add__panel__inp"
        name="ticketPrice"
        value={ticketPrice}
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
        maxLength="225"
        value={description}
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
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  ticketPrice: PropTypes.string.isRequired,
  handeChange: PropTypes.func.isRequired,
  addFilm: PropTypes.func.isRequired,
};

export default FilmsAddPanel;
