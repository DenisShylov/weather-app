import * as gateways from 'Gateways/wetherAPI';

export const WEATHER_DATA = 'WEATHER_DATA';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const SWITCH_UNITS = 'SWITCH_UNITS';
export const ADD_CITIES = 'ADD_CITIES';
export const SET_CITI = 'SET_CITI';

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

export const switchUnits = () => {
  return { type: SWITCH_UNITS };
};

export const addCities = (data) => {
  return {
    type: ADD_CITIES,
    payload: data,
  };
};

export const setCiti = (city) => {
  return {
    type: SET_CITI,
    payload: city,
  };
};

export const getWeatherData = (city) => {
  return async (dispatch) => {
    dispatch(showSpinner());
    dispatch(weatherData(await gateways.weatherData(city)));
  };
};
