import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HourForecast from 'Components/HourForecast/HourForecast';
import moment from 'moment';
import 'moment/locale/ru';

import { v4 as uuidv4 } from 'uuid';
import { AiOutlineStar } from 'react-icons//ai';

import { useDispatch, useSelector } from 'react-redux';
import { historyDataSelector } from 'redux/WeatherHistory/weatherHistory.selectors';

import * as stateSelector from 'redux/Weather/weather.selectors';
import { addCities } from 'redux/Weather/weather.actions';

import './CityPage.css';

const CityPage = () => {
  const dispatch = useDispatch();

  const [onHour, setOnHour] = useState(false);
  const [arrIndex, setArrIndex] = useState(0);

  const data = useSelector(stateSelector.dataSelector);
  const history = useSelector(historyDataSelector);

  const { location, forecast } = data;
  const units = useSelector(stateSelector.switchUnitsSelector);
  const hourArray = forecast.forecastday[+arrIndex].hour;
  const forecastDay = forecast.forecastday;

  const handleHoursForecast = useCallback((e) => {
    setArrIndex(e.target.id);
    setOnHour(true);
  }, []);

  const favoriteCities = useSelector(stateSelector.favoriteCitiesSelector);

  const handleAddCiti = useCallback(() => {
    if (favoriteCities.includes(location.name)) {
      alert(`${location.name} is already in the list of favorites`);
      return;
    } else {
      dispatch(addCities(location.name));
      alert('You have added a city to the list of favorite cities');
    }
  }, [dispatch, location.name, favoriteCities]);

  return (
    <>
      <NavLink to={'/history-weather'}>История погоды</NavLink>
      <NavLink to={'/sports-events'}>Спортивные события</NavLink>

      <div className="favorite-cities">
        <span></span>
      </div>
      <h3>{`${location.name}, ${location.country}`}</h3>

      <AiOutlineStar onClick={handleAddCiti} />

      <div className="container-weather-data" onClick={handleHoursForecast}>
        {forecastDay.map((item, index) => {
          return (
            <div key={uuidv4()} className="weather-card" id={index}>
              <p id={index}>{moment(item.date).format('D MMMM')}</p>
              <img src={item.day.condition.icon} alt="weatherIcon" id={index} />
              <p id={index}>
                {`Мин.темп
                ${
                  units
                    ? Math.round(item.day.mintemp_c) + ' °C'
                    : Math.round(item.day.mintemp_f) + ' °F'
                }
                `}
              </p>
              <p id={index}>
                {`Макс.темп 
                ${
                  units
                    ? Math.round(item.day.maxtemp_c) + ' °C'
                    : Math.round(item.day.maxtemp_f) + ' °F'
                }`}
              </p>
            </div>
          );
        })}
      </div>

      {onHour && (
        <>
          <h3>
            {moment(data.forecast.forecastday[+arrIndex].date).format('D MMMM')}
          </h3>

          <div className="weather-hours">
            <HourForecast data={hourArray} history={history} units={units} />
          </div>
        </>
      )}
    </>
  );
};

export default CityPage;
