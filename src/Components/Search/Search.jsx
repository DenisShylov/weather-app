import React, { useCallback, useEffect, useState } from 'react';
import ShowSpinner from 'Components/ShowSpinner/ShowSpinner';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as stateSelector from 'redux/Weather/weather.selectors';
import * as weatherActions from 'redux/Weather/weather.actions';
import { GoSearch } from 'react-icons/go';
import { fetchingWeatherHistory } from 'redux/WeatherHistory/weatherHistory.actions';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import FavoriteCities from 'Components/Cabinet/FavoriteCities';
import Autocomplete from 'Components/Autocompele/Autocomplete';
import './Search.css';

const Search = () => {
  const navigate = useNavigate();
  const url = useLocation();
  const dispatch = useDispatch();

  const isFetching = useSelector(stateSelector.fetchingSelector);

  const [city, setCity] = useState('');
  const reduxCity = useSelector(stateSelector.setCitiSelector);

  useEffect(() => {
    setCity(reduxCity);
  }, [reduxCity]);

  const handleChange = useCallback((e) => {
    return setCity(e.target.value);
  }, []);

  const handleSearch = useCallback(async () => {
    await dispatch(
      weatherActions.getWeatherData(city[0].toUpperCase() + city.slice(1))
    );
    await dispatch(
      fetchingWeatherHistory(
        city,
        moment().format('YYYY-MM-DD'),
        moment().add(2, 'days').format('YYYY-MM-DD')
      )
    );

    navigate(`${url.pathname}/citypage/:${city}`);
  }, [dispatch, city, navigate, url.pathname]);

  return (
    <>
      <Row>
        <Col className="Col">
          <input
            className="search-input"
            type="text"
            value={city}
            placeholder="Введите название города"
            onChange={handleChange}
          />

          <GoSearch className="search-icon" onClick={handleSearch} />
        </Col>
        <Autocomplete city={city} search={handleSearch} setCity={setCity} />
      </Row>
      <FavoriteCities setCity={setCity} />

      {isFetching && <ShowSpinner />}
    </>
  );
};

export default Search;
