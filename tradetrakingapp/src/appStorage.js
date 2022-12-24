const appStorage = (
  state = {
    loginUser: { isLogin: false, data: {} },
    positions: [],
    transactions: [],
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loginUser: { isLogin: true, data: action.payload } };

    case "LOGOUT":
      return { ...state, loginUser: { isLogin: false, data: action.payload } };

    case "POSITIONS":
      return { ...state, positions: action.payload };

    case "TRANSACTIONS":
      return { ...state, transactions: action.payload };

    default:
      return state;
  }
};

export default appStorage;
