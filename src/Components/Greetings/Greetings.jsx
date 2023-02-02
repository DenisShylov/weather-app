import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Greetings.css';

const Greetings = () => {
  const url = useLocation();

  return (
    <div className="container">
      <div className="greeting__block">
        <p>Login or register to continue working</p>
        <div className="greeting__btn">
          <NavLink to={`${url.pathname}auth/login`}>
            <button>Log In</button>
          </NavLink>
          <NavLink to={`${url.pathname}auth/registration`}>
            <button>Registr</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Greetings;
