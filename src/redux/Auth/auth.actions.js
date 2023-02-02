export const AUTH_USER = 'AUTH_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const authUser = () => {
  return {
    type: AUTH_USER,
  };
};

export const signOutUser = () => {
  return {
    type: SIGN_OUT,
  };
};
