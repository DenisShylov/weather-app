export const dataSelector = (state) => {
  return state.weather.data;
};

export const fetchingSelector = (state) => {
  return state.weather.isFetching;
};

export const switchUnitsSelector = (state) => {
  return state.weather.isMetric;
};

export const favoriteCitiesSelector = (state) => {
  return state.weather.favoriteCities;
};

export const setCitiSelector = (state) => {
  return state.weather.city;
};
