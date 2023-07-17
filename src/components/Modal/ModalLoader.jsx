import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalStyle } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

class ModalLoader extends Component {
  render() {
    const { children } = this.props;

    return createPortal(
      <ModalStyle>
        <div className="modal">{children}</div>
      </ModalStyle>,
      modalRoot
    );
  }
}

ModalLoader.propTypes = {
  children: PropTypes.node,
};

export default ModalLoader;
