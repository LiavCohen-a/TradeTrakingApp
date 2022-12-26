const appStorage = (
  state = {
    loginUser: { isLogin: false, data: {} },
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loginUser: { isLogin: true, data: action.payload } };

    case "LOGOUT":
      return { ...state, loginUser: { isLogin: false, data: action.payload} };
      
    default:
      return state;
  }
};

export default appStorage;
