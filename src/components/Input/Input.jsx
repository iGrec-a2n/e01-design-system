import './Input.css';

// eslint-disable-next-line no-unused-vars
const togglePassword = () => {
  const passwordInput = document.querySelector('.input-text');
  if (passwordInput) {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
  }
}

export default function Input({ type, name, placeholder }) {

  return (
    <div className='input-container'>
      <label htmlFor={ name }>{name}</label>
      <span className='error'></span>
      <input className='input-text' type={ type } name={ name } placeholder={ placeholder }/>
      { type !== 'password' && <span className="icon" onClick={togglePassword}>👁️</span> }
    </div>
  );
}

import PropTypes from 'prop-types';

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};