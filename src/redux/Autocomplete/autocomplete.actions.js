import { fetchGeoData } from 'Gateways/geoAPI';
import { showSpinner } from 'redux/Weather/weather.actions';

export const GET_AUTOCOMPLETE_DATA = 'GET_AUTOCOMPLETE_DATA';

export const getAutocompleteData = (data) => {
  return {
    type: GET_AUTOCOMPLETE_DATA,
    payload: data,
  };
};

export const getData = (city) => {
  return async (dispatch) => {
    dispatch(showSpinner());
    dispatch(getAutocompleteData(await fetchGeoData(city)));
  };
};
