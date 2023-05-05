// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';

const Button = ({ title }) => (
  <button type="button">
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
