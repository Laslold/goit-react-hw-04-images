import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';
import { ModalStyle } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');
const ModalLoader = ({ children }) => {
  return createPortal(
    <ModalStyle>
      <div className="modal">{children}</div>
    </ModalStyle>,
    modalRoot
  );
};

ModalLoader.propTypes = {
  children: PropTypes.node,
};

export default ModalLoader;
