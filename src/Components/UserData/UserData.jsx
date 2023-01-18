import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './UserData.css';
const UserData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm({ mode: 'onChange' });

  const handleData = useCallback((data) => {
    localStorage.setItem(data.email, JSON.stringify(data));
    reset();
  }, []);
  console.log(getValues());
  const errorEmailElem = (
    <div className="form-error">{errors?.email?.message}</div>
  );
  const errorNameElem = (
    <div className="form-error">{errors?.name?.message}</div>
  );
  const errorLastNameElem = (
    <div className="form-error">{errors?.lastName?.message}</div>
  );
  const errorPassElem = (
    <div className="form-error">{errors?.password?.message}</div>
  );

  return (
    <div>
      <h1>User Data</h1>
      <form className="form-user-data" onSubmit={handleSubmit(handleData)}>
        <button type="button">Edit</button>
        <label htmlFor="email">Email*</label>
        <input
          {...register('email', {
            required: 'Please enter email',
          })}
          type="email"
          id="email"
        />
        {errors?.email && errorEmailElem}
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          {...register('phoneNumber', { required: true, maxLength: 13 })}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          placeholder="+380"
          type="tel"
          id="phoneNumber"
        />
        {errors?.phoneNumber?.type === 'required' && (
          <p style={{ color: 'red' }}>This field is required</p>
        )}
        {errors?.phoneNumber?.type === 'maxLength' && (
          <div style={{ color: 'red' }}>
            Phone number cannot exceed 13 characters
          </div>
        )}

        <label htmlFor="name">Name*</label>
        <input
          {...register('name', { required: 'Name is required field!' })}
          type="text"
          id="name"
        />
        {errors?.name && errorNameElem}
        <label htmlFor="lastName">Last name*</label>
        <input
          {...register('lastName', { required: 'last name is required' })}
          type="text"
        />
        {errors?.lastName && errorLastNameElem}
        <label htmlFor="pass">Pass*</label>
        <input
          {...register('password', { required: 'Password is required' })}
          type="password"
          id="password"
        />
        {errors?.password && errorPassElem}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserData;
