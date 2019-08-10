import React from 'react';
import PropTypes from 'prop-types';

const EditFilm = ({
  poster,
  name,
  tags,
  description,
  startDate,
  endDate,
  ticketPrice,
  handleChange,
  saveChanges,
}) => (
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">Edit movie</h5>
      <button type="button" className="close" data-dismiss="modal">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <form
        action="#"
        className="modal-edit"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          className="form-control modal-edit__inp"
          name="poster"
          placeholder="Poster url"
          value={poster}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="form-control modal-edit__inp"
          name="name"
          placeholder="Film name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="form-control modal-edit__inp"
          name="tags"
          placeholder="Tags"
          value={tags}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control modal-edit__inp"
          name="description"
          rows="5"
          maxLength="225"
          placeholder="Description"
          value={description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          className="form-control modal-edit__inp"
          name="startDate"
          placeholder="Start date"
          value={startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          className="form-control modal-edit__inp"
          name="endDate"
          placeholder="End date"
          value={endDate}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          className="form-control modal-edit__inp"
          name="ticketPrice"
          placeholder="Ticket price"
          value={ticketPrice}
          onChange={handleChange}
          required
        />
      </form>
    </div>
    <div className="modal-footer">
      <button
        type="button"
        className="btn modal-btn_save"
        onClick={saveChanges}
      >
        Save changes
      </button>
      <button
        type="button"
        className="btn modal-btn_close"
        data-dismiss="modal"
      >
        Close
      </button>
    </div>
  </div>
);

EditFilm.propTypes = {
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  ticketPrice: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
};

export default EditFilm;
