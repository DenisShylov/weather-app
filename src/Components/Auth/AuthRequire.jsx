import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authUserSelector } from 'redux/Auth/auth.selectors';

const AuthRequire = ({ children }) => {
  const isAuth = useSelector(authUserSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth/login');
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};

export default AuthRequire;
