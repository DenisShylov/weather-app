import React from 'react';
import { useInput } from 'Hooks/useValidate';
import { NavLink } from 'react-router-dom';

import './Form.css';

const Form = ({ handleClick, title, formName }) => {
  const email = useInput('', { isEmpty: true, isEmail: true });
  const pass = useInput('', { isEmpty: true, minLength: 6 });

  return (
    <div className="wrapper">
      <div className="auth-form-container">
        <div className="login-form">
          <h3>{`${title} form`}</h3>

          <label htmlFor="email">Email</label>
          {email.isDirty && email.isEmpty && (
            <span className="validate">field must not be empty</span>
          )}
          {email.isDirty && email.emailError && (
            <span className="validate">not correct email</span>
          )}
          <input
            type="text"
            name="email"
            id="email"
            value={email.value}
            placeholder="Enter email..."
            onChange={email.handleChange}
            onBlur={email.handleBlur}
          />

          <label htmlFor="pass">Password</label>
          {pass.isDirty && pass.minLengthError && (
            <div className="validate">min length 6</div>
          )}
          <input
            type="password"
            value={pass.value}
            id="pass"
            placeholder="Enter password..."
            onChange={pass.handleChange}
            onBlur={pass.handleBlur}
          />

          <button
            type="submit"
            onClick={() => handleClick(email.value, pass.value)}
          >
            {formName !== 'login' ? 'Log In' : 'Registration'}
          </button>

          <NavLink className="link-btn" to={`/auth/${formName}`}>
            {formName === 'registration'
              ? 'Don`t have an account? Register here'
              : 'Already have an account? Login here'}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Form;
