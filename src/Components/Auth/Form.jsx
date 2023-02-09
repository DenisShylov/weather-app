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
          <h3>{`Форма ${title} `}</h3>

          <label htmlFor="email">Эл.почта</label>
          {email.isDirty && email.isEmpty && (
            <span className="validate">поле не должно быть пустым</span>
          )}
          {email.isDirty && email.emailError && (
            <span className="validate">не корректный email</span>
          )}
          <input
            type="text"
            name="email"
            id="email"
            value={email.value}
            placeholder="Введите email..."
            onChange={email.handleChange}
            onBlur={email.handleBlur}
          />

          <label htmlFor="pass">Пароль</label>
          {pass.isDirty && pass.minLengthError && (
            <div className="validate">минимум 6 символов</div>
          )}
          <input
            type="password"
            value={pass.value}
            id="pass"
            placeholder="Введите пароль..."
            onChange={pass.handleChange}
            onBlur={pass.handleBlur}
          />

          <button
            type="submit"
            onClick={() => handleClick(email.value, pass.value)}
          >
            {formName !== 'login' ? 'Авторизоваться' : 'Зарегистрироваться'}
          </button>

          <NavLink className="link-btn" to={`/auth/${formName}`}>
            {formName === 'registration'
              ? 'Нет аккаунта? Зарегистрируйтесь '
              : 'У вас уже есть аккаунт? Нажмите для авторизации'}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Form;
