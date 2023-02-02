import React, { useCallback, useState } from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';

import './UserData.css';

const UserData = () => {
  const AuthDataLocalStorage = JSON.parse(localStorage.getItem('Auth') || '');

  const [name, setName] = useLocalStorage('name', '');
  const [lastName, setLastName] = useLocalStorage('lastName', '');
  const [phone, setPhone] = useLocalStorage('phone', '');
  const [edit, setEdit] = useState(false);

  const handlePhone = useCallback((e) => setPhone(e.target.value), [setPhone]);
  const handleName = useCallback((e) => setName(e.target.value), [setName]);
  const handleLastName = useCallback(
    (e) => setLastName(e.target.value),
    [setLastName]
  );
  const handleEdit = useCallback(() => setEdit(!edit), [edit]);

  const handleSave = useCallback(() => {
    setLastName(JSON.parse(localStorage.getItem('lastName')));
    setName(JSON.parse(localStorage.getItem('name')));
    setPhone(JSON.parse(localStorage.getItem('phone')));
    setEdit(false);
  }, [setLastName, setPhone, setName]);

  return (
    <>
      <h3>User Data</h3>

      <div
        className="data-container"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <span>Email: {AuthDataLocalStorage?.user?.email}</span>

        {edit ? (
          <>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={handleLastName}
            />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleName}
            ></input>
            <label htmlFor="phone"> Phone:</label>
            <input type="tel" id="phone" value={phone} onChange={handlePhone} />
          </>
        ) : (
          <>
            <span>LastName: {lastName}</span>
            <span>Name: {name}</span>
            <span>Phone: {phone}</span>
          </>
        )}
      </div>

      {edit ? (
        <button className="user-data-btn" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className="user-data-btn" onClick={handleEdit}>
          Edit
        </button>
      )}
    </>
  );
};

export default UserData;
