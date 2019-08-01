import React from 'react';

const FilmsAddPanel = () => (
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
        required
      />
      <input
        type="text"
        className="form-control films__add__panel__inp"
        name="name"
        placeholder="Film name"
        required
      />
      <input
        type="text"
        className="form-control films__add__panel__inp"
        name="tags"
        placeholder="Tags"
        required
      />
      <input
        type="date"
        className="form-control films__add__panel__inp"
        name="startDate"
        placeholder="Start date"
        required
      />
      <input
        type="date"
        className="form-control films__add__panel__inp"
        name="endDate"
        placeholder="End date"
        required
      />
      <input
        type="number"
        className="form-control films__add__panel__inp"
        name="ticketPrice"
        placeholder="Ticket price"
        required
      />
    </div>

    <div className="films__add__panel__right-side">
      <textarea
        className="form-control films__add__panel__inp"
        name="description"
        rows="8"
        placeholder="Description"
        required
      />
      <button type="submit" className="btn films__add__panel__btn">
        Save
      </button>
    </div>
  </form>
);

export default FilmsAddPanel;
