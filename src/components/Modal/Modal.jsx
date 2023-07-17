import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalStyle } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.close();
      return;
    }
    // if (e.code === 'Escape') {
    //   this.props.close();
    // }
  };

  render() {
    const { close, children } = this.props;
    const { handleClose } = this;

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
  }
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
