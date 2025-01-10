import './Button.css';

export default function Button({ value, type, name }) {
  return (
    <input type={ type } name={ name } className="enter-btn" value={ value } />
  );
}

import PropTypes from 'prop-types';

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
};