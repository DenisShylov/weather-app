import moment from 'moment/moment';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './HourForecast.css';
const HourForecast = (data) => {
  return (
    <>
      {data.data.map((item) => {
        return (
          <div key={uuidv4()} className="weather-card">
            <img
              src={item.condition.icon}
              alt="weatherIcon"
              style={{ width: '100px' }}
            />
            <div className="weather-card__container">
              <h4>
                <b>{moment(item.time).format('HH:mm')}</b>
              </h4>
              <p>Температура {Math.round(item.temp_c)} °C</p>
              <p>чувствуется как {Math.round(item.feelslike_c)} °C</p>
              <p>Порывы ветра, км/ч {item.gust_kph}</p>
              <p>Давление мм.рт.ст {Math.round(item.pressure_mb / 1.33)}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HourForecast;
