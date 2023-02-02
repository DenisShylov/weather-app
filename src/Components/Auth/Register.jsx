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
      alert('You have successfully registered');
      navigate('/auth/login');
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        alert('user with this email already exists');
      } else alert(error);
    }
  };
  return (
    <Form handleClick={handleRegistr} title="Registration" formName={'login'} />
  );
};
export default Registr;
