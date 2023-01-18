import { SHOW_SPINNER } from 'redux/Weather/weather.actions';
import { GET_HISTORY_DATA } from './weatherHistory.actions';

const initialState = {
  history: '',
  isFetching: false,
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case GET_HISTORY_DATA:
      console.log('action', action.payload);
      return {
        ...state,
        history: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default historyReducer;
