import './Input.css';
import { useState } from 'react';
import EyeShow from '../../assets/eye-show.svg'; 
import EyeHide from '../../assets/eye-hide.svg'; 

export default function Input({ index, type, name, placeholder }) {
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'text' ? 'password' : 'text'));
  };
  
  return (
    <div className='input-container'>
      <label htmlFor={`input-${index}`}>{name}</label>
      <span className='error'></span>
      <div className='input-box'>
        <input className='input-text' id={`input-${index}`} type={ inputType } name={ name } placeholder={ placeholder }/>
        { type !== 'text' && <button className="icon" onClick={togglePasswordVisibility}>
            <img
              src={inputType === "password" ? EyeShow : EyeHide}
              alt={inputType === "password" ? "Show password" : "Hide password"}
            />
        </button> }
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';

Input.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};