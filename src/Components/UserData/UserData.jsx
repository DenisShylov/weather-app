import React, { useCallback, useState } from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';

import './UserData.css';
import { useInput } from 'Hooks/useValidate';

const UserData = () => {
  const AuthDataLocalStorage = JSON.parse(localStorage.getItem('Auth') || '');
  const tel = useInput('', { minLength: 7, maxLength: 12 });

  const [name, setName] = useLocalStorage('name', '');
  const [lastName, setLastName] = useLocalStorage('lastName', '');
  useLocalStorage('phone', tel.value);
  const [edit, setEdit] = useState(false);

  const handleName = useCallback((e) => setName(e.target.value), [setName]);
  const handleLastName = useCallback(
    (e) => setLastName(e.target.value),
    [setLastName]
  );
  const handleEdit = useCallback(() => setEdit(!edit), [edit]);

  const handleSave = useCallback(() => {
    setLastName(JSON.parse(localStorage.getItem('lastName')));
    setName(JSON.parse(localStorage.getItem('name')));
    JSON.parse(localStorage.getItem('phone'));
    setEdit(false);
  }, [setLastName, tel.value, setName]);
  console.log(tel.maxLengthError);
  console.log('min', tel.minLengthError);
  return (
    <>
      <h3>Данные пользователя</h3>

      <div className="data-container">
        <span>Эл.почта: {AuthDataLocalStorage?.user?.email}</span>

        {edit ? (
          <>
            <label htmlFor="last-name">Фамилия</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={handleLastName}
            />
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleName}
            ></input>
            <label htmlFor="phone"> Телефон:</label>
            {tel.isDirty && tel.minLengthError && (
              <span className="validate">
                {tel.minLengthError ? 'минимум 7 символов' : ''}
              </span>
            )}

            {tel.isDirty && tel.maxLengthError && (
              <span className="validate">
                {tel.maxLengthError ? 'максимум 12 символов' : ''}
              </span>
            )}
            <input
              type="tel"
              id="phone"
              value={tel.value}
              onChange={tel.handleChange}
              onBlur={tel.handleBlur}
            />
          </>
        ) : (
          <>
            <span>Фамилия: {lastName}</span>
            <span>Имя: {name}</span>
            <span>Телефон: {tel.value}</span>
          </>
        )}
      </div>

      {edit ? (
        <button className="user-data-btn" onClick={handleSave}>
          Сохранить
        </button>
      ) : (
        <button className="user-data-btn" onClick={handleEdit}>
          Редактировать
        </button>
      )}
    </>
  );
};

export default UserData;
