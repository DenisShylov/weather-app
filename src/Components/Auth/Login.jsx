import React from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (email, password) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        ({ user }) => {
          console.log(user);
          navigate('/homepage');
        }
      );
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Form handleClick={handleLogin} title={'Login'} formName={'registration'} />
  );
};

export default Login;
