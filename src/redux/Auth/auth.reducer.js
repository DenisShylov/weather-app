import { AUTH_USER, SIGN_OUT } from './auth.actions';

const initialState = {
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuth: true,
      };

    case SIGN_OUT:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default authReducer;
