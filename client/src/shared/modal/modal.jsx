import React from 'react';
import PropTypes from 'prop-types';

import EditFilm from '../../containers/editFilm';

const Modal = ({ modalContent }) => (
  <div
    className="modal fade"
    tabIndex="-1"
    id="modal"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div className="modal-dialog modal-dialog-centered">
      <EditFilm modalContent={modalContent} />
    </div>
  </div>
);

Modal.propTypes = {
  modalContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export default Modal;
