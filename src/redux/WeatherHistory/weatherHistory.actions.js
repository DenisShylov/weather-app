import { getWeatherHistory } from 'Gateways/weatherHistoryAPI';
import { showSpinner } from 'redux/Weather/weather.actions';

export const GET_HISTORY_DATA = 'GET_HISTORY_DATA';

export const getData = (data) => {
  return {
    type: GET_HISTORY_DATA,
    payload: data,
  };
};

export const fetchingWeatherHistory = (city, dateTo, dateEnd) => {
  console.log(city, dateTo, dateEnd);
  return async (dispatch) => {
    dispatch(getData(await getWeatherHistory(city, dateTo, dateEnd)));
  };
};
