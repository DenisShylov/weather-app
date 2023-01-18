import { SHOW_SPINNER, WEATHER_DATA } from './weather.actions';

const initialState = {
  data: '',
  isFetching: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case WEATHER_DATA:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
