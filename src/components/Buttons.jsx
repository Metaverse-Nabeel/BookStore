// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';

const Button = ({ title, handleClick, className }) => (
  <button type="button" className={className} onClick={handleClick}>
    {title}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
