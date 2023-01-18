import { fetchSportsEvents } from 'Gateways/sportsAPI';

export const SPORTS_DATA = 'SPORTS_DATA';

export const sportData = (data) => {
  return {
    type: SPORTS_DATA,
    payload: data,
  };
};

export const getSportData = () => {
  return async (dispatch) => {
    dispatch(sportData(await fetchSportsEvents()));
  };
};
