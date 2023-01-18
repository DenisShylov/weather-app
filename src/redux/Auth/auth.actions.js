export const SET_USER_DATA = 'SET_USER_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';

export const setUserData = (data) => {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
};

export const getUserData = () => {
  return {
    type: GET_USER_DATA,
  };
};
