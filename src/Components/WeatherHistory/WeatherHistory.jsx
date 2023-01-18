import React, { useCallback, useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from 'redux/Weather/weather.selectors';
import { fetchingWeatherHistory } from 'redux/WeatherHistory/weatherHistory.actions';
import { historyDataSelector } from 'redux/WeatherHistory/weatherHistory.selectors';
import HourForecast from 'Components/HourForecast/HourForecast';

const WeatherHistory = () => {
  const dispatch = useDispatch();

  const city = useSelector((state) => dataSelector(state).location.name);
  const [dateTo, setDateTo] = useState(moment().format('yyyy-MM-DD'));
  const [dateEnd, setDateEnd] = useState(
    moment().add(1, 'days').format('yyyy-MM-DD')
  );

  const [onHour, setOnHour] = useState(false);
  const [arrIndex, setArrIndex] = useState(0);

  const handleCurrentDate = useCallback((e) => {
    if (moment(e.target.value).format('MM') === moment().format('MM')) {
      setDateTo(moment().subtract(7, 'd').format('yyyy-MM-DD'));
    }
    if (moment().format('DD') - moment(e.target.value).format('DD') > 7) {
      alert(
        'Вы можете посмотреть историю за последние 7 дней от нынешней даты'
      );
      setDateTo(moment().subtract(7, 'd').format('yyyy-MM-DD'));
    } else {
      setDateTo(e.target.value);
    }
  }, []);

  const handleDateEnd = useCallback((e) => {
    setDateEnd(e.target.value);

    if (moment(e.target.value).format('DD') - moment(dateTo).format('DD') > 2) {
      alert(
        'Вы не можете посмотреть погоду более чем на 3 дня вперед от текущей даты'
      );
      setDateEnd(moment().add(2, 'days').format('yyyy-MM-DD'));
    }
  }, []);

  useMemo(() => {
    dispatch(fetchingWeatherHistory(city, dateTo, dateEnd));
  }, [dateTo, dateEnd]);

  const historyData = useSelector((state) => historyDataSelector(state));

  const historyDataHour = historyData.forecast.forecastday[+arrIndex].hour;

  const handleHoursForecast = useCallback((e) => {
    setArrIndex(e.target.id);
    setOnHour(true);
  }, []);

  return (
    <>
      <h3>История погоды в г.{city}</h3>

      <div className="input-box">
        <input
          style={{ margin: '10px' }}
          type="date"
          value={dateTo}
          onChange={handleCurrentDate}
        />
        <input type="date" value={dateEnd} onChange={handleDateEnd} />
      </div>

      <div
        className="container-weather-history "
        onClick={handleHoursForecast}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {historyData
          ? historyData.forecast.forecastday.map((item, index) => {
              return (
                <div key={uuidv4()} className="weather-card" id={index}>
                  <p>{moment(item.date).format('D MMMM')}</p>
                  <img src={item.day.condition.icon} alt="weatherIcon" />
                  <p>Мин.темп {Math.round(item.day.mintemp_c)} °C</p>
                  <p>Макс.темп {Math.round(item.day.maxtemp_c)} °C</p>
                </div>
              );
            })
          : null}
      </div>

      {onHour && (
        <>
          <h3>
            {moment(historyData.forecast.forecastday[+arrIndex].date).format(
              'D MMMM'
            )}
          </h3>
          <div className="weather-hours">
            <HourForecast data={historyDataHour} />
          </div>
        </>
      )}
    </>
  );
};

export default WeatherHistory;
