import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ModalStyle } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');
const Modal = ({ close, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  });

  const handleClose = ({ target, code, currentTarget }) => {
    if (code === 'Escape' || target === currentTarget) {
      close();
      return;
    }
  };

  return createPortal(
    <ModalStyle onClick={handleClose}>
      <div className="modal">
        <img
          className="modalClose"
          onClick={close}
          src="https://img.icons8.com/ultraviolet/40/cancel.png"
          alt="cancel"
        />
        {children}
      </div>
    </ModalStyle>,
    modalRoot
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
