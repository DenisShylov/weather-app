import {
  ADD_CITIES,
  SET_CITI,
  SHOW_SPINNER,
  SWITCH_UNITS,
  WEATHER_DATA,
} from './weather.actions';

const initialState = {
  data: '',
  isFetching: false,
  isMetric: true,
  favoriteCities: [],
  city: '',
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

    case SWITCH_UNITS:
      return {
        ...state,
        isMetric: !state.isMetric,
      };

    case ADD_CITIES:
      return {
        ...state,
        favoriteCities: state.favoriteCities.concat(action.payload),
      };

    case SET_CITI:
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
