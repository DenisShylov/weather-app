import React, { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HourForecast from 'Components/HourForecast/HourForecast';
import moment from 'moment';
import 'moment/locale/ru';
import { v4 as uuidv4 } from 'uuid';

import './CityPage.css';
import { useDispatch } from 'react-redux';
import { fetchingWeatherHistory } from 'redux/WeatherHistory/weatherHistory.actions';

const CityPage = (data, history) => {
  const [onHour, setOnHour] = useState(false);
  const [arrIndex, setArrIndex] = useState(0);
  const dispatch = useDispatch();
  const { location, forecast } = data.data;

  useMemo(() => {
    setOnHour(false);
  }, [forecast]);

  const hourArray = forecast.forecastday[+arrIndex].hour;
  const forecastDay = forecast.forecastday;

  const handleHoursForecast = useCallback((e) => {
    setArrIndex(e.target.id);
    setOnHour(true);
  }, []);

  // const fetchHistory = useCallback(() => {
  //   dispatch(
  //     fetchingWeatherHistory(
  //       location.name,
  //       moment().format('YYYY-MM-DD'),
  //       moment().add(2, 'days').format('YYYY-MM-DD')
  //     )
  //   );
  // });
  console.log(data);
  return (
    <>
      <NavLink to={'/history-weather'}>История погоды</NavLink>
      <NavLink to={'/sports-events'}>Спортивные события</NavLink>
      <h3>{`${location.name}, ${location.country}`}</h3>
      <div className="container-weather-data" onClick={handleHoursForecast}>
        {forecastDay.map((item, index) => {
          return (
            <div key={uuidv4()} className="weather-card" id={index}>
              <p id={index}>{moment(item.date).format('D MMMM')}</p>
              <img src={item.day.condition.icon} alt="weatherIcon" id={index} />
              <p id={index}>Мин.темп {Math.round(item.day.mintemp_c)} °C</p>
              <p id={index}>Макс.темп {Math.round(item.day.maxtemp_c)} °C</p>
            </div>
          );
        })}
      </div>

      {onHour && (
        <>
          <h3>
            {moment(data.data.forecast.forecastday[+arrIndex].date).format(
              'D MMMM'
            )}
          </h3>

          <div className="weather-hours">
            <HourForecast data={hourArray} history={history} />
          </div>
        </>
      )}
    </>
  );
};

export default CityPage;
