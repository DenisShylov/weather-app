import React, { createContext, useCallback, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from 'redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greetings from 'Components/Greetings/Greetings';
import Login from 'Components/Auth/Login';
import Registr from 'Components/Auth/Register';
import ErrorURL from 'Components/ErrorURL/ErrorURL';
import CityPage from 'Components/CityPage/CityPage';

import './firebase/firebase.js';
import 'App.css';
import Search from 'Components/Search/Search.jsx';
import WeatherHistory from 'Components/WeatherHistory/WeatherHistory.jsx';
import SportsEvents from 'Components/SportsEvents/SportsEvents.jsx';
import UserData from 'Components/UserData/UserData.jsx';
import Cabinet from 'Components/Cabinet/Cabinet.jsx';
import { ThemeProvider } from 'Context/themes-context.js';
import Header from 'Components/Header/Header.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <ThemeProvider>
          <Cabinet />
        </ThemeProvider>

        <Routes>
          <Route exact path="/" element={<Greetings />} />
          <Route path="/user-data" element={<UserData />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/registration" element={<Registr />} />
          <Route path="*" element={<ErrorURL />} />
          <Route path="/homepage" element={<Search />} />
          <Route path="/citypage" element={<CityPage />} />
          <Route path="/history-weather" element={<WeatherHistory />} />
          <Route path="/sports-events" element={<SportsEvents />} />
          <Route path="/cabinet" element={<Cabinet />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
