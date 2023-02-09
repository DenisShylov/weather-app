import React from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { authUser } from 'redux/Auth/auth.actions';
import Form from './Form';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const auth = getAuth();
    try {
      localStorage.setItem(
        'Auth',
        JSON.stringify(await signInWithEmailAndPassword(auth, email, password))
      );
      await signInWithEmailAndPassword(auth, email, password).then(
        (response) => {
          if (response._tokenResponse.registered) {
            dispatch(authUser());
          }
        }
      );

      if (JSON.parse(localStorage.getItem('Auth')).user.email === email) {
        navigate('/homepage');
      }
      if (JSON.parse(localStorage.getItem('Auth')).user.email !== email) {
        navigate('/auth/registration');
      }
    } catch (error) {
      const userNotFound = 'Firebase: Error (auth/user-not-found).';
      const userInvalid = 'Firebase: Error (auth/invalid-email).';
      const wrongPassworld = 'Firebase: Error (auth/wrong-password).';
      if (error.message === wrongPassworld) {
        alert('вы ввели неверный пароль');
      } else if (
        error.message === userNotFound ||
        error.message === userInvalid
      ) {
        alert('User not found');
        navigate('/auth/registration');
      } else alert(error.message);
    }
  };
  return (
    <Form
      handleClick={handleLogin}
      title={'авторизации'}
      formName={'registration'}
    />
  );
};

export default Login;
