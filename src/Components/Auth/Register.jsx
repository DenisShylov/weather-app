import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

const Registr = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleRegistr = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        ({ user }) => {
          console.log(user);
          navigate('/auth/login');
        }
      );
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Form handleClick={handleRegistr} title="Registration" formName={'login'} />
  );
};
export default Registr;
