import React from 'react';

const showAddPanel = () => {
  const panel = document.querySelector('.films__add__panel');
  const arrow = document.querySelectorAll('.films__add__title__arrow');

  panel.classList.toggle('films__add__panel_active');
  arrow.forEach(item => item.classList.toggle('films__add__title__arrow_active'));

  if (panel.classList.contains('films__add__panel_active')) {
    panel.style.display = 'flex';
  } else {
    setTimeout(() => {
      panel.style.display = 'none';
    }, 500);
  }
};

const FilmsAddTitle = () => (
  <div className="films__add__title">
    <button
      type="button"
      className="btn films__add__title__btn"
      onClick={showAddPanel}
    >
      <span className="films__add__title__text">Add film</span>
      <i className="fas fa-chevron-down films__add__title__arrow films__add__title__arrow_active" />
      <i className="fas fa-chevron-up films__add__title__arrow" />
    </button>
    <span className="films__add__title__line" />
  </div>
);

export default FilmsAddTitle;
