import { SHOW_SPINNER } from 'redux/Weather/weather.actions';
import { GET_HISTORY_DATA } from './weatherHistory.actions';

const initialState = {
  history: '',
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
      };
    case GET_HISTORY_DATA:
      return {
        ...state,
        history: action.payload,
      };

    default:
      return state;
  }
};

export default historyReducer;
