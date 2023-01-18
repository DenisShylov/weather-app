export const dataSelector = (state) => {
  return state.weather.data;
};

export const fetchingSelector = (state) => {
  return state.weather.isFetching;
};
