import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

const Registr = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleRegistr = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Вы успешно зарегистрировались');
      navigate('/auth/login');
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        alert('пользователь с таким адресом электронной почты уже существует');
      } else alert(error);
    }
  };
  return (
    <Form handleClick={handleRegistr} title="регистрации" formName={'login'} />
  );
};
export default Registr;
