import PropTypes from 'prop-types';
import { ButtonMBoxStyle, ButtonStyle } from './Button.styled';
function Button(props) {
  const { text, type, onClick } = props;
  return (
    <ButtonMBoxStyle>
      <ButtonStyle type={type} onClick={onClick}>
        {text}
      </ButtonStyle>
    </ButtonMBoxStyle>
  );
}

Button.defaultProps = {
  text: 'noText',
  type: 'button',
  onClick: () => {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
