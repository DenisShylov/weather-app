import { GoSignOut } from 'react-icons/go';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from 'redux/Auth/auth.actions';
import { authUserSelector } from 'redux/Auth/auth.selectors';

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(authUserSelector);

  const handleSignOut = useCallback(() => {
    if (isAuth) {
      dispatch(signOutUser());
      navigate('/');
    }
  }, [dispatch, isAuth, navigate]);
  return (
    <>
      {isAuth ? (
        <GoSignOut className="sign-out" onClick={handleSignOut} />
      ) : null}
    </>
  );
};

export default SignOut;
