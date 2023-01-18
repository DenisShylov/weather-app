import { GET_USER_DATA, SET_USER_DATA } from './auth.actions';

const initialState = {
  authData: '',
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,

        authData: action.payload,
      };
    case GET_USER_DATA:
      return state;

    default:
      return state;
  }
};

export default authReducer;
