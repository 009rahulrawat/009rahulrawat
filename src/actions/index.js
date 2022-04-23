export const userAuthEmail = (email) => {
  return {
    type: "USER_AUTH_EMAIL",
    payload: email,
  };
};
