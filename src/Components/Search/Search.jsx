import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CityPage from 'Components/CityPage/CityPage';
import ShowSpinner from 'Components/ShowSpinner/ShowSpinner';
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as stateSelector from 'redux/Weather/weather.selectors';
import * as weatherActions from 'redux/Weather/weather.actions';
import Header from 'Components/Header/Header';
import { fetchingWeatherHistory } from 'redux/WeatherHistory/weatherHistory.actions';
import moment from 'moment';
import { historyDataSelector } from 'redux/WeatherHistory/weatherHistory.selectors';

const Search = () => {
  const dispatch = useDispatch();
  const weatherDataRedux = useSelector((state) =>
    stateSelector.dataSelector(state)
  );

  const weatherHistory = useSelector((state) => historyDataSelector(state));
  const isFetching = useSelector((state) =>
    stateSelector.fetchingSelector(state)
  );

  const [city, setCity] = useState('');

  const handleChange = useCallback((e) => {
    return setCity(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    dispatch(weatherActions.getWeatherData(city));
    dispatch(
      fetchingWeatherHistory(
        city,
        moment().format('YYYY-MM-DD'),
        moment().add(2, 'days').format('YYYY-MM-DD')
      )
    );
  }, [city]);
  return (
    <>
      <Header />
      <Row>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            alignItems: 'center',
          }}
        >
          <input
            style={{
              borderRadius: '25px',
              padding: '5px',
              textAlign: 'center',
              width: '300px',
            }}
            type="text"
            value={city}
            placeholder="Введите название города"
            onChange={handleChange}
          />
          <FontAwesomeIcon
            style={{ cursor: 'pointer', marginLeft: '20px', fontSize: '20px' }}
            icon={faMagnifyingGlass}
            onClick={handleSearch}
          />
        </Col>
      </Row>

      {isFetching && <ShowSpinner />}
      {weatherDataRedux && (
        <CityPage data={weatherDataRedux} history={weatherHistory} />
      )}
    </>
  );
};

export default Search;
