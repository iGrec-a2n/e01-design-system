import Input from "../Input/Input";
import Button from "../Button/button";
import "./Form.css";
import { useNavigate } from "react-router";
import { useState } from "react";

const formFormat = {
  login: [
    {
      type: "text",
      name: "username",
      placeholder: "Enter your username",
      label: "Username",
      required: true,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
    {
      type: "submit",
      value: "CONNEXION",
      className: "btn-reset",
    },
  ],
  resetPassword: [
    {
      type: "password",
      name: "password",
      placeholder: "Enter your new password",
      label: "Password",
      required: true,
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm your new password",
      label: "Confirm Password",
      required: true,
    },
    {
      type: "submit",
      value: "REINITIALISER",
      className: "btn-reset",
    },
  ],
};


export default function Form({type}) {
  const fields = formFormat[type] || [];
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formState[field.name]) {
        newErrors[field.name] = true;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted successfully", formState);
    }
  };

  console.log("type= "+type,"fields= "+ fields);
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <h1>{type === "login" ? "CONNEXION" : "NOUVEAU MOT DE PASSE"}</h1>
      <form method="post" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
        field.type !== "submit" ? (
        <Input 
        key={index} 
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        labelValue={field.labelValue} />
        ) : (
        <Button 
        key={index} 
        value={field.value} 
        type={field.type} 
        className={field.className} />)
        ))}
        {type === "login" ? 
          <p>
          Mot de passe oublié ?{" "}
          <span
            className="link"
            onClick={() => navigate("/resetPassword")}
            style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
          >
            Réinitialiser ici
          </span>
        </p>
        :
        <p>
          Vous avez un compte ?{" "}
          <span
            className="link"
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
          >
            Connectez-vous
          </span>
        </p>
      }
      </form>
    </div>
  );
}

import PropTypes from 'prop-types';

Form.propTypes = {
  type: PropTypes.string.isRequired,
};