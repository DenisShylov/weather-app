import { SPORTS_DATA } from './sportEvents.actions';

const initialState = {
  data: '',
};

const sportEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPORTS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default sportEventsReducer;
