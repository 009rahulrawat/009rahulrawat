export const userAuth = (state = {}, action) => {
  switch (action.type) {
    case "USER_AUTH_EMAIL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
