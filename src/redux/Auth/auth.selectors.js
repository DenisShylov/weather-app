export const userDataSelector = (state) => {
  return state.auth.authData;
};

export const isAuthSelector = (state) => {
  return state.auth.isAuth;
};
