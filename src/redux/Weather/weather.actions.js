import * as gateways from 'Gateways/wetherAPI';

export const WEATHER_DATA = 'WEATHER_DATA';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};
export const weatherData = (data) => {
  return {
    type: WEATHER_DATA,
    payload: data,
  };
};

export const getWeatherData = (city) => {
  return async (dispatch) => {
    dispatch(showSpinner());
    dispatch(weatherData(await gateways.weatherData(city)));
  };
};
